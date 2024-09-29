import React from 'react';
import Participant from '../Participant/Participant';
import css from './ParticipantList.module.css';

const ParticipantList = ({ participants }) => {
  return (
    <div className={css.cardListContainer}>
      <ul className={css.participantList}>
        {participants.map(participant => (
          <li key={participant.id} className={css.participantItem}>
            <Participant
              id={participant.id}
              email={participant.email}
              fullName={participant.fullName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParticipantList;
// import React from 'react';
// import Participant from '../Participant/Participant';
// import css from './ParticipantList.module.css';

// const ParticipantList = ({ participants, loading, error }) => {
//   if (loading) {
//     return <p>Loading participants...</p>;
//   }

//   if (error) {
//     return <p>Error loading participants: {error.message}</p>;
//   }

//   const columns = Array.from({ length: 6 }, () => []);

//   participants.forEach((participant, index) => {
//     columns[Math.floor(index / 2) % 6].push(participant);
//   });

//   return (
//     <div className={css.cardListContainer}>
//       {columns.map((column, columnIndex) => (
//         <div key={columnIndex} className={css.participantColumn}>
//           {column.map(participant => (
//             <div key={participant.id} className={css.participantItem}>
//               <Participant
//                 id={participant.id}
//                 email={participant.email}
//                 fullName={participant.fullName}
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ParticipantList;
