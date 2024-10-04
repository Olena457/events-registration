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

// export default AboutEvent;
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ParticipantDetails = () => {
  const { eventId, participantId } = useParams();
  const [participantData, setParticipantData] = useState(null);

  useEffect(() => {
    const fetchParticipantData = async () => {
      try {
        const response = await axios.get(`YOUR_GOOGLE_SHEETS_API_URL`);
        const data = response.data;
        const participant = data.find(item => item.id === participantId);
        setParticipantData(participant);
      } catch (error) {
        console.error('Error fetching participant data:', error);
      }
    };

    fetchParticipantData();
  }, [participantId]);

  if (!participantData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{participantData.name}</h2>
      <p>{participantData.email}</p>
      {/* Відобразити інші дані учасника */}
    </div>
  );
};

export default ParticipantDetails;
