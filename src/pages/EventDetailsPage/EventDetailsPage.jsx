// import React, { useState, useEffect } from 'react';
// import { useParams, Outlet, NavLink } from 'react-router-dom';
// import css from './EventDetailsPage.module.css';

// const EventDetailsPage = () => {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);

//   if (!event) {
//     return <div>loading...</div>;
//   }

//   return (
//     <div className={css.WrapperCard}>
//       <div className={css.eventContainer}>
//         <div className={css.eventInfo}>
//           <p className={css.eventName}>Title: {event.title}</p>
//         </div>
//         <div className={css.eventInfo}>
//           <p className={css.eventDescription}>
//             Description: {event.description}
//           </p>
//         </div>
//         <div className={css.eventInfo}>
//           <p className={css.eventName}>Organizer: {event.organizer}</p>
//         </div>
//         <div className={css.eventInfo}>
//           <p className={`${css.eventDate} ${css.eventName}`}>
//             Date: {event.event_date}
//           </p>
//         </div>
//         <div className={css.btnContainer}>
//           <NavLink to="register" className={css.btn}>
//             Register
//           </NavLink>
//           <NavLink to="participants" className={css.btn}>
//             View
//           </NavLink>
//           <NavLink
//             to="register"
//             className={({ isActive }) =>
//               isActive ? `${css.btn} ${css.active}` : css.btn
//             }
//           >
//             Register
//           </NavLink>

//           <NavLink
//             to="participants"
//             className={({ isActive }) =>
//               isActive ? `${css.btn} ${css.active}` : css.btn
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

import css from './EventDetailsPage.module.css';
import EventCard from '../../components/EventCard/EventCard.jsx';
const EventDetailsPage = ({ idEvent }) => {
  return (
    <>
      <div className={css.WrapperCard}>
        <EventCard />
      </div>
    </>
  );
};
export default EventDetailsPage;
