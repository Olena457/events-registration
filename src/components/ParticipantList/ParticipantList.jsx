import { useParams } from 'react-router-dom';
import Participant from '../Participant/Participant';
import styles from './ParticipantList.module.css';

const ParticipantList = ({ participants }) => {
  const { idEvent } = useParams();
  const events = events.find(event => event.idEvent === idEvent);

  return (
    <div className={styles.cardListContainer}>
      <h2>Participants for {idEvent}</h2>
      <ul className={styles.participantList}>
        {participants.map(participant => (
          <li
            key={participant.participantId}
            className={styles.participantItem}
          >
            <Participant
              participantId={participant.participantId}
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
