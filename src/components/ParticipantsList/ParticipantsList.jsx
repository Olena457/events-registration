// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
// import Participant from './Participant';
// import styles from './Participants.module.css';

// const Participants = ({ participants }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   if (!isLoggedIn) {
//     return <p>Please log in to view participants.</p>;
//   }

//   return (
//     <div className={styles.participantsContainer}>
//       {participants.map(participant => (
//         <Participant
//           key={participant.id}
//           participantId={participant.id}
//           email={participant.email}
//           fullName={participant.fullName}
//         />
//       ))}
//     </div>
//   );
// };

import { useSelector } from 'react-redux';
import Participant from './Participant';
import styles from './ParticipantList.module.css';
import defaultAvatar from '../../assets/icons/user.svg';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';

const ParticipantList = ({ participants }) => {
  return (
    <ul className={styles.participantList}>
      {participants.map((participant, id) => (
        <li key={id} className={styles.participantItem}>
          <Participant
            participantId={participant.id}
            email={participant.email}
            fullName={participant.fullName || participant['participant_name']}
            avatar={participant.avatar || defaultAvatar}
          />
        </li>
      ))}
    </ul>
  );
};

export default ParticipantList;
