// import styles from './Participant.module.css';

// const Participant = ({ participantId, email, fullName }) => {
//   return (
//     <div className={styles.partCard}>
//       <div className={styles.partInfo}>
//         <p className={styles.partName}>{fullName}</p>
//       </div>
//       <div className={styles.partInfo}>
//         <p className={styles.partName}>{email}</p>
//       </div>
//     </div>
//   );
// };

// export default Participant;
import React from 'react';
import styles from './Participant.module.css';

const Participant = ({ participantId, email, fullName, avatar }) => {
  return (
    <div className={styles.partCard}>
      <div className={styles.iconParticipantWrapper}>
        <img
          src={avatar}
          aria-label="user avatar"
          alt="user avatar"
          className={styles.participantAvatar}
        />
        <p className={styles.partName}>{fullName}</p>
      </div>
      <div className={styles.partInfo}>
        <p className={styles.partName}>{email}</p>
      </div>
    </div>
  );
};

export default Participant;
