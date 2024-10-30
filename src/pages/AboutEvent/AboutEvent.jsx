// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from '../../ParticipantList/ParticipantList.jsx';

// import css from './AboutEvent.module.css';
// import Loading from '../../Loading/Loading.jsx';

// const AboutEvent = () => {
//   const { idEvent } = useParams();
//   const [participants, setParticipants] = useState([]);
//   const [loadingParticipants, setLoadingParticipants] = useState(true);

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
//         );
//         setParticipants(response.data);
//         setLoadingParticipants(false);
//         toast.success('Participants fetched successfully!');
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         toast.error('Error fetching participants: ' + error.message);
//         setLoadingParticipants(false);
//       }
//     };

//     fetchParticipants();
//   }, [idEvent]);

//   return (
//     <>
//       <h1 className={css.title}>Participants for Event {idEvent}</h1>
//       {loadingParticipants ? (
//         <Loading />
//       ) : (
//         <div className={css.wrapperCard}>
//           <ParticipantList participants={participants} />
//         </div>
//       )}
//     </>
//   );
// };

// export default AboutEvent;
// ______________________________________________________________це хороший код
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from '../../ParticipantList/ParticipantList.jsx';

// import css from './AboutEvent.module.css';
// import Loading from '../../Loading/Loading.jsx';

// const AboutEvent = () => {
//   const { idEvent } = useParams();
//   const [participants, setParticipants] = useState([]);
//   const [loadingParticipants, setLoadingParticipants] = useState(true);

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
//         );
//         const filteredParticipants = response.data.filter(
//           participant => participant.idEvent === idEvent
//         );
//         setParticipants(filteredParticipants);
//         setLoadingParticipants(false);
//         toast.success('Participants fetched successfully!');
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         toast.error('Error fetching participants: ' + error.message);
//         setLoadingParticipants(false);
//       }
//     };

//     fetchParticipants();
//   }, [idEvent]);

//   return (
//     <>
//       <h1 className={css.title}>Participants for Event {idEvent}</h1>
//       {loadingParticipants ? (
//         <Loading />
//       ) : (
//         <div className={css.wrapperCard}>
//           <ParticipantList participants={participants} />
//         </div>
//       )}
//     </>
//   );
// };
// __________________________________________________________________
// export default AboutEvent;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ParticipantList from './../../ParticipantList/ParticipantList';

// const ParticipantDetails = () => {
//   const { eventId, participantId } = useParams();
//   const [participantData, setParticipantData] = useState(null);

//   useEffect(() => {
//     const fetchParticipantData = async () => {
//       try {
//         const response = await axios.get(`YOUR_GOOGLE_SHEETS_API_URL`);
//         const data = response.data;
//         const participant = data.find(item => item.id === participantId);
//         setParticipantData(participant);
//       } catch (error) {
//         console.error('Error fetching participant data:', error);
//       }
//     };

//     fetchParticipantData();
//   }, [participantId]);

//   if (!participantData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ParticipantList/>

//     </div>
//   );
// };

// export default ParticipantDetails;
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from './../../ParticipantList/ParticipantList.jsx';
// const AboutEvent = () => {
//   const { id } = useParams();
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/participants'
//         );
//         const filteredParticipants = response.data.filter(
//           participant => participant.idEvent === id
//         );
//         if (filteredParticipants.length === 0) {
//           toast.error('No participants registered for this event.');
//           setTimeout(() => {
//             navigate('*');
//           }, 3000);
//         } else {
//           setParticipants(filteredParticipants);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         setLoading(false);
//       }
//     };

//     fetchParticipants();
//   }, [id, history]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Participants for Event {id}</h2>
//       <h2>Participants for Event {id}</h2>
//       <ParticipantList participants={participants} />
//     </div>
//   );
// };

// export default AboutEvent;
// ____________________________________________________________
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from './../../ParticipantList/ParticipantList.jsx';

// const AboutEvent = () => {
//   const { id } = useParams();
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/`${id}`'
//         );

//         // Перевірка структури даних
//         if (response.data && response.data.participants) {
//           const participantsData = response.data.participants;

//           const filteredParticipants = participantsData.filter(
//             participant => participant.idEvent === id
//           );

//           if (filteredParticipants.length === 0) {
//             toast.error('No participants registered for this event.');
//             setTimeout(() => {
//               navigate('*');
//             }, 3000);
//           } else {
//             setParticipants(filteredParticipants);
//           }
//         } else {
//           toast.error('No participants data found.');
//           navigate('*');
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         setLoading(false);
//       }
//     };

//     fetchParticipants();
//   }, [id, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Participants for Event {id}</h2>
//       <ParticipantList participants={participants} />
//     </div>
//   );
// };

// export default AboutEvent;
// __________________________________________________________
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import ParticipantList from './../../ParticipantList/ParticipantList.jsx';

// const AboutEvent = () => {
//   const { id } = useParams();
//   const [participants, setParticipants] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchParticipants = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/${id}`
//         );

//         if (
//           response.data &&
//           response.data.event &&
//           response.data.event.participants
//         ) {
//           const participantsData = response.data.event.participants;
//           if (participantsData.length === 0) {
//             toast.error('No participants registered for this event.');
//             setTimeout(() => {
//               navigate('*');
//             }, 3000);
//           } else {
//             setParticipants(participantsData);
//           }
//         } else {
//           toast.error('No participants data found.');
//           setTimeout(() => {
//             navigate('*');
//           }, 3000);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching participants:', error);
//         setLoading(false);
//       }
//     };

//     fetchParticipants();
//   }, [id, navigate]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Participants for Event {id}</h2>
//       <ParticipantList participants={participants} />
//     </div>
//   );
// };

// export default AboutEven;
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import css from './AboutEvent.module.css';
import Loading from '../../components/Loading/Loading.jsx';

const AboutEvent = () => {
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events'
        );

        if (response.data && response.data.events) {
          const event = response.data.events.find(
            event => event.idEvent === id
          );
          if (event && event.participants) {
            const participantsData = JSON.parse(event.participants);
            if (participantsData.length === 0) {
              toast.error('No participants registered for this event.');
              setTimeout(() => {
                navigate('*');
              }, 3000);
            } else {
              setParticipants(participantsData);
            }
          } else {
            toast.error('No participants data found.');
            setTimeout(() => {
              navigate('*');
            }, 3000);
          }
        } else {
          toast.error('No events data found.');
          setTimeout(() => {
            navigate('*');
          }, 3000);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching participants:', error);
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [id, navigate]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <h1 className={css.title}>Participants for Event {idEvent}</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className={css.wrapperCard}>
          <ParticipantList participants={participants} />
        </div>
      )}
    </>
  );
};

export default AboutEvent;
