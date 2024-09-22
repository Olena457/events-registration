// import css from './EventCard.module.css';

// export default function EventCard({
//   title,
//   description,
//   id,
//   onRegister,
//   onView,
// }) {
//   return (
//     <div className={css.eventContainer}>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{title}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{description}</p>
//       </div>
//       <button
//         className={`${css.button} ${css.registerBtn}`}
//         type="button"
//         onClick={handleRegisterClick}
//       >
//         Register
//       </button>
//       <button
//         className={`${css.button} ${css.viewBtn}`}
//         type="button"
//         onClick={handleViewClick}
//       >
//         View
//       </button>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({ title, description, id, registeredUsers }) {
  const viewLink =
    registeredUsers && registeredUsers.length > 0
      ? `/about-event/${id}`
      : '/not-found';

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
      <Link
        to={`/register/${id}`}
        className={`${css.btn} && ${css.registerBtn}`}
      >
        Register
      </Link>
      <Link to={viewLink} className={`${css.btn} && ${css.registerBtn}`}>
        View
      </Link>
    </div>
  );
}
