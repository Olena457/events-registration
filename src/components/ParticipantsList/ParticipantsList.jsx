// import { useSelector } from 'react-redux';
// import Participant from './Participant';
// import styles from './ParticipantList.module.css';
// import defaultAvatar from '../../assets/icons/user.svg';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';

// const ParticipantList = ({ participants }) => {
//   return (
//     <ul className={styles.participantList}>
//       {participants.map((participant, id) => (
//         <li key={id} className={styles.participantItem}>
//           <Participant
//             participantId={participant.id}
//             email={participant.email}
//             fullName={participant.fullName || participant['participant_name']}
//             avatar={participant.avatar || defaultAvatar}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ParticipantList;
import Participant from './Participant';
import styles from './ParticipantList.module.css';

const ParticipantList = ({ participants }) => (
  <ul className={styles.participantList}>
    {Object.entries(participants).map(([id, participant]) => (
      <li key={id} className={styles.participantItem}>
        <Participant
          participantId={id}
          email={participant.email}
          fullName={participant.full_name}
        />
      </li>
    ))}
  </ul>
);

export default ParticipantList;
