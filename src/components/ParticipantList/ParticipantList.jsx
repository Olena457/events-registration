import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventsContext } from '../../contexts/EventsContext.jsx';
import Participant from '../Participant/Participant';
import css from './ParticipantList.module.css';

const ParticipantList = ({ participants }) => {
  const events = useContext(EventsContext);
  const { idEvent } = useParams();
  const event = events.find(event => event.idEvent === idEvent);

  return (
    <div className={css.cardListContainer}>
      <h2>Participants for {idEvent}</h2>
      <ul className={css.participantList}>
        {participants.map(participant => (
          <li key={participant.participantId} className={css.participantItem}>
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
