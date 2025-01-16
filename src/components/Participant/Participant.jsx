import css from './Participant.module.css';

const Participant = ({ participantId, email, fullName }) => {
  return (
    <div className={css.partCard}>
      <div className={css.partInfo}>
        <p className={css.partName}>{fullName}</p>
      </div>
      <div className={css.partInfo}>
        <p className={css.partName}>{email}</p>
      </div>
    </div>
  );
};

export default Participant;
