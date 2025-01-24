import React from 'react';
import styles from './ParticipantList.module.css';
import defaultAvatar from '../../assets/icons/user.svg';

const ParticipantList = ({ participants }) => {
  return (
    <div className={styles.participantList}>
      {Object.values(participants).map(participant => (
        <div key={participant.email} className={styles.participantCard}>
          <img
            src={defaultAvatar}
            aria-label="user avatar"
            alt="user avatar"
            className={styles.participantAvatar}
          />
          <div className={styles.participantInfo}>
            <p className={styles.participantName}>{participant.full_name}</p>
            <p className={styles.participantEmail}>{participant.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParticipantList;
