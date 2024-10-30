// import { Link } from 'react-router-dom';
// import css from './EventCard.module.css';

// export default function EventCard({
//   title,
//   description,
//   id,
//   organizer,
//   dateEvent,
//   registeredUsers,
// }) {
//   const viewLink =
//     registeredUsers && registeredUsers.length > 0 ? `/event/{Id}` : '*';

//   return (
//     <div className={css.eventContainer}>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{title}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{description}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{organizer}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>{dateEvent}</p>
//       </div>
//       <Link to="/user" className={css.button}>
//         Register
//       </Link>

//       <Link to={viewLink} className={css.button}>
//         View
//       </Link>
//     </div>
//   );
// }
// ___________________________________________________________________
// import { Link } from 'react-router-dom';
// import css from './EventCard.module.css';

// export default function EventCard({
//   title,
//   description,
//   idEvent,
//   organizer,
//   dateEvent,
//   participant,
// }) {
//   const viewLink =
//     participant && participant.length > 0 ? `/register-event/${idEvent}` : '*';

//   return (
//     <div className={css.eventContainer}>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>Title: {title}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventDescription}>Description: {description}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>Organizer: {organizer}</p>
//       </div>
//       <div className={css.eventInfo}>
//         <p className={css.eventName}>Date: {dateEvent}</p>
//       </div>
//       <div className={css.btnContainer}>
//         <Link to="/partispantId" className={css.btn}>
//           Register
//         </Link>
//         <Link to={viewLink} className={`${css.btnView} & ${css.btn}`}>
//           View
//         </Link>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({
  title,
  description,
  idEvent,
  organizer,
  dateEvent,
}) {
  return (
    <div className={css.eventContainer}>
      <div className={css.eventInfo}>
        <p className={css.eventName}>Title: {title}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventDescription}>Description: {description}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>Organizer: {organizer}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>Date: {dateEvent}</p>
      </div>
      <div className={css.btnContainer}>
        <Link to={`/register-event/${idEvent}`} className={css.btn}>
          Register
        </Link>
        <Link
          to={`/event/${idEvent}/participants`}
          className={`${css.btnView} ${css.btn}`}
        >
          View
        </Link>
      </div>
    </div>
  );
}
