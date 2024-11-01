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
  event_date,
}) {
  return (
    <div className={css.eventContainer}>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{title}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventDescription}> {description}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}> {organizer}</p>
      </div>
      <div className={css.eventInfo}>
        <p className={css.eventName}>{event_date}</p>
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
