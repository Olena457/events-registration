import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({
  title,
  description,
  id,
  organizerFullName,
  eventDate,
  registeredUsers,
}) {
  const viewLink =
    registeredUsers && registeredUsers.length > 0 ? `/event/{Id}` : '*';

  return (
    <div className={css.eventContainer}>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{title}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{description}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{organizerFullName}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{eventDate}</p>
      </div>
      <Link to="/user" className={css.button}>
        Register
      </Link>

      <Link to={viewLink} className={css.button}>
        View
      </Link>
    </div>
  );
}
