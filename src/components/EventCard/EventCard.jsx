import css from './EventCard.module.css';
import { toast } from 'react-toastify';

export default function EventCard({
  title,
  description,
  id,
  onRegister,
  onView,
  // participants = [], // Додано параметр для учасників
}) {
  const handleViewClick = () => {
    if (participants.length === 0) {
      toast.info(`No participants for event ID: ${id}`);
    } else {
      onView
        ? onView(id)
        : toast.info(`Viewing participants for event ID: ${id}`);
    }
  };

  const handleRegisterClick = () => {
    onRegister ? onRegister(id) : toast.info(`Registering for event ID: ${id}`);
  };

  return (
    <div className={css.eventContainer}>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{title}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{description}</p>
      </div>
      <button
        className={`${css.button} ${css.registerBtn}`}
        type="button"
        onClick={handleRegisterClick}
      >
        Register
      </button>
      <button
        className={`${css.button} ${css.viewBtn}`}
        type="button"
        onClick={handleViewClick}
      >
        View
      </button>
    </div>
  );
}
