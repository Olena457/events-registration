import React from 'react';
import EventCard from './../EventCard/EventCard.jsx';
import css from './CardEventList.module.css';

const CardEventList = ({ events, handleRegister }) => {
  return (
    <div className={css.containerList}>
      <ul className={css.gallery}>
        {events.map(event => (
          <li key={event.idEvent} className={css.galleryEvent}>
            <EventCard
              title={event.title}
              description={event.description}
              organizer={event.organizer}
              event_date={event.event_date}
              idEvent={event.idEvent}
              participantId={event.participantId}
              handleRegister={handleRegister}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardEventList;

{
  /* ============================ */
}
{
  /* second variant */
}
{
  /* ============================ */
}
// import React from 'react';
// import css from './CardEventList.module.css';
// const CardEventList = ({ events, handleRegister }) => {
//   return (
//     <div>
//       {events.length > 0 ? (
//         <ul className={css.gallery}>
//           {events.map(event =>
//             event.title && event.organizer && event.date ? (
//               <li key={event.idEvent} className={css.galleryEvent}>
//                 <h3 className={css.partName}>{event.title}</h3>
//                 <p className={css.partInfo}>{event.organizer}</p>
//                 <p className={css.partInfo}>{event.date}</p>
//                 <button onClick={() => handleRegister(event.idEvent)}>
//                   Register
//                 </button>
//               </li>
//             ) : null
//           )}
//         </ul>
//       ) : (
//         <div className={css.noEvents}>
//           <h1>Events not found</h1>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="64"
//             height="64"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-calendar"
//           >
//             <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//             <line x1="16" y1="2" x2="16" y2="6"></line>
//             <line x1="8" y1="2" x2="8" y2="6"></line>
//             <line x1="3" y1="10" x2="21" y2="10"></line>
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardEventList;
