//     registeredUsers && registeredUsers.length > 0 ? `/event/{idEvent}/participants` : 'participant not found';

//
import React from 'react';
import { Link } from 'react-router-dom';
import css from './EventCard.module.css';

export default function EventCard({
  title,
  description,
  idEvent,
  organizer,
  eventDate,
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
        <p className={css.eventName}>Date: {eventDate}</p>
      </div>
      <div className={css.btnContainer}>
        <Link to={`/event/${idEvent}/register`} className={css.btn}>
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
