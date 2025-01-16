import React from 'react';
import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({
  title,
  description,
  id,
  organizer,
  event_date,
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
        <p className={`${css.eventDate} ${css.eventName}`}>
          Date: {event_date}
        </p>
      </div>
      <div className={css.btnContainer}>
        <Link to={`/events/${id}/register`} className={css.btn}>
          Registration
        </Link>
      </div>
      <div className={css.btnContainer}>
        <Link to={`/events/${id}/participants`} className={css.btn}>
          View
        </Link>
      </div>
    </div>
  );
}

// import { useParams } from 'react-router-dom';

// export function Book() {
//   const { id } = useParams();

//   return <h1>Book {id}</h1>;
// }
