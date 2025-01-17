import styles from './Participant.module.css';

const Participant = ({ participantId, email, fullName }) => {
  return (
    <div className={styles.partCard}>
      <div className={styles.partInfo}>
        <p className={styles.partName}>{fullName}</p>
      </div>
      <div className={styles.partInfo}>
        <p className={styles.partName}>{email}</p>
      </div>
    </div>
  );
};

export default Participant;
