// import React, { useState, useEffect } from 'react';
// import { useParams, Outlet, NavLink } from 'react-router-dom';
// import styles from './EventDetailsPage.module.styles';

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

//   if (!event) {
//     return <div>loading...</div>;
//   }

//   return (
//     <div className={styles.WrapperCard}>
//       <div className={styles.eventContainer}>
//         <div className={styles.eventInfo}>
//           <p className={styles.eventName}>Title: {event.title}</p>
//         </div>
//         <div className={styles.eventInfo}>
//           <p className={styles.eventDescription}>
//             Description: {event.description}
//           </p>
//         </div>
//         <div className={styles.eventInfo}>
//           <p className={styles.eventName}>Organizer: {event.organizer}</p>
//         </div>
//         <div className={styles.eventInfo}>
//           <p className={`${styles.eventDate} ${styles.eventName}`}>
//             Date: {event.event_date}
//           </p>
//         </div>
//         <div className={styles.btnContainer}>
//           <NavLink to="register" className={styles.btn}>
//             Register
//           </NavLink>
//           <NavLink to="participants" className={styles.btn}>
//             View
//           </NavLink>
//           <NavLink
//             to="register"
//             className={({ isActive }) =>
//               isActive ? `${styles.btn} ${styles.active}` : styles.btn
//             }
//           >
//             Register
//           </NavLink>

//           <NavLink
//             to="participants"
//             className={({ isActive }) =>
//               isActive ? `${styles.btn} ${styles.active}` : styles.btn
//             }
//           >
//             View
//           </NavLink>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default EventDetailsPage;

import styles from './EventDetailsPage.module.css';
import Card from '../../components/Card/Card.jsx';
const CardDetailsPage = ({ cardId }) => {
  return (
    <>
      <div className={styles.WrapperCard}>
        <Card />
      </div>
    </>
  );
};
export default CardDetailsPage;
