import styles from './Participant.module.css';
import defaultAvatar from '../../assets/icons/user.svg';
import { useParams } from 'react-router-dom';

const Participants = ({ cards }) => {
  const { cardId } = useParams();
  const card = cards.find(card => card.id === cardId);

  return (
    <div className={styles.partCard}>
      <h2 className={styles.title}>{card.title} Participants</h2>
      {card.participants &&
        Object.entries(card.participants).map(([id, participant]) => (
          <div key={id} className={styles.iconParticipantWrapper}>
            <img
              src={defaultAvatar}
              aria-label="user avatar"
              alt="user avatar"
              className={styles.participantAvatar}
            />
            <div className={styles.partName}>{participant.full_name}</div>
            <div className={styles.partInfo}>
              <p className={styles.partName}>{participant.email}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Participants;
