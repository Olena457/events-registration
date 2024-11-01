import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loading from '../../components/Loading/Loading.jsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import css from './AboutEvent.module.css';

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
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
              'X-Master-Key': API_KEY,
            },
          }
        );
        const event = response.data.record.events.find(
          event => event.idEvent === id
        );
        if (event) {
          if (event.participants.length === 0) {
            toast.error('No participants registered for this event.');
            setTimeout(() => {
              navigate('/events/:id');
            }, 3000);
          } else {
            setParticipants(event.participants);
          }
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
