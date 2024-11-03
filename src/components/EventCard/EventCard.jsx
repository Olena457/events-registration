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
        <Link to={`/${idEvent}`} className={css.btn}>
          Details
        </Link>
      </div>
    </div>
  );
}
