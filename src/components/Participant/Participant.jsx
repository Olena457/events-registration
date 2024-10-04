import { RiUser3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import css from './Participant.module.css';

const Participant = ({ participantId, email, fullName }) => {
  const handleEdit = () => {
    console.log(`Редагувати учасника з ID: ${participantId}`);
  };

  const handleDelete = () => {
    console.log(`Видалити учасника з ID: ${participantId}`);
  };

  return (
    <div className={css.partCard}>
      <div className={css.partInfo}>
        <RiUser3Fill />
        <p className={css.partName}>{fullName}</p>
      </div>
      <div className={css.partInfo}>
        <MdEmail />
        <p className={css.partName}>{email}</p>
      </div>
      <button onClick={handleEdit} className={css.editButton}>
        Edit
      </button>
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
};

export default Participant;
