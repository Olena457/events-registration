import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loading from '../../components/Loading/Loading.jsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import css from './AboutEvent.module.css';

const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

const AboutEvent = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Access-Key': ACCESS_KEY_GET,
              'X-JSON-Path': `$.events[?(@.idEvent=='${id}')].participants[*]`,
            },
          }
        );

        if (response.data.records.length === 0) {
          toast.error('No participants registered for this event.');
          setTimeout(() => {
            navigate(`/events/${id}`);
          }, 3000);
        } else {
          setParticipants(response.data.records);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching participants:', error);
        toast.error('Error fetching participants.');
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading... </div> && <Loading />;
  }

  return (
    <div className={css.wrapperCard}>
      <h2 className={css.title}>Participants for Event {id}</h2>
      <ParticipantList participants={participants} />
    </div>
  );
};

export default AboutEvent;
