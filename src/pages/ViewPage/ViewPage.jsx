import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loading from '../../components/Loading/Loading.jsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import css from './ViewPage.module.css';
import { EventsContext } from '../../contexts/EventsContext.jsx';

const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

const ViewPage = () => {
  const events = useContext(EventsContext);
  const { idEvent } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const event = events.find(event => event.idEvent === idEvent);

    if (event) {
      const fetchParticipants = async () => {
        try {
          console.log('Fetching participants for event:', idEvent);
          const response = await axios.get(
            `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
            {
              headers: {
                'X-Access-Key': ACCESS_KEY_GET,
                'X-JSON-Path': `$.events[?(@.idEvent=='${idEvent}')].participants.fullName`,
              },
            }
          );
          console.log('Response received:', response); //  логування

          const participantsData =
            response.data?.record?.events?.find(e => e.idEvent === idEvent)
              ?.participants || [];
          if (participantsData.length === 0) {
            toast.error('No participants registered for this event.');
            setTimeout(() => {
              navigate(`/events`);
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
    }
  }, [events, idEvent, navigate]);

  if (loading) {
    return <div>Loading... </div>;
  }

  return (
    <div className={css.wrapperCard}>
      <h2 className={css.title}>Participants for Event {idEvent}</h2>
      <ParticipantList participants={participants} />
    </div>
  );
};

export default ViewPage;

// корекція 3____________________________________
// import { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// // import Loading from '../../components/Loading/Loading.jsx';
// import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
// import css from './ViewPage.module.css';
// import { EventsContext } from '../../contexts/EventsContext.jsx';

// const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
// const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

// const ViewPage = () => {

//   const { idEvent } = useParams();
//   const navigate = useNavigate();
//   const events = useContext(EventsContext);
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const event = events.find(event => event.idEvent === idEvent);
//     if (event) {
//       const fetchParticipants = async () => {
//         try {
//           const response = await axios.get(
//             `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
//             {
//               headers: {
//                 'X-Access-Key': ACCESS_KEY_GET,
//                 'X-JSON-Path': `$.events[?(@.idEvent=='${idEvent}')].participants[*]`,
//               },
//             }
//           );

//           const participantsData =
//             response.data[0]?.record?.events?.find(e => e.idEvent === idEvent)
//               ?.participants || [];

//           if (participantsData.length === 0) {
//             toast.error('No participants registered for this event.');
//             setTimeout(() => {
//               navigate(`/${idEvent}`);
//             }, 3000);
//           } else {
//             setParticipants(participantsData);
//           }

//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching participants:', error);
//           toast.error('Error fetching participants.');
//           setLoading(false);
//         }
//       };

//       fetchParticipants();
//     }
//   }, [events, idEvent, navigate]);

//   if (loading) {
//     return <div>Loading... </div>;
//   }

//   return (
//     <div className={css.wrapperCard}>
//       <h2 className={css.title}>Participants for Event {idEvent}</h2>
//       <ParticipantList participants={participants} />
//     </div>
//   );
// };

// export default ViewPage;
// import { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
// import { EventsContext } from '../../contexts/EventsContext.jsx';
// import css from './ViewPage.module.css';

// const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';
// const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;

// const ViewPage = () => {
//   const { idEvent } = useParams();
//   const navigate = useNavigate();
//   const events = useContext(EventsContext);
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
//           {
//             headers: {
//               'X-Access-Key': ACCESS_KEY_GET,
//               'X-JSON-Path': `$.events[?(@.idEvent=="${idEvent}")].participants[*]`,
//             },
//           }
//         );

//         const participantsData = response.data[0]?.record?.participants || [];

//         if (participantsData.length === 0) {
//           toast.error('No participants registered for this event.');
//           setTimeout(() => {
//             navigate(`/events`);
//           }, 3000);
//         } else {
//           setParticipants(participantsData);
//         }
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         toast.error('Error fetching participants.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchParticipants();
//   }, [idEvent, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={css.wrapperCard}>
//       <h2 className={css.title}>Participants for Event {idEvent}</h2>
//       <ParticipantList participants={participants} />
//     </div>
//   );
// };

// export default ViewPage;
