import React from 'react';
import Participant from '../Participant/Participant';
import css from './ParticipantList.module.css';

const ParticipantList = ({ participants, loading, error }) => {
  if (loading) {
    return <p>Loading participants...</p>;
  }

  if (error) {
    return <p>Error loading participants: {error.message}</p>;
  }

  return (
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
  );
};

export default ParticipantList;
