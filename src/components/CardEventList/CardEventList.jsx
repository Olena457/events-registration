import React from 'react';
import EventCard from './../EventCard/EventCard.jsx';
import css from './CardEventList.module.css';

const CardEventList = ({ events, handleRegister, handleView }) => {
  return (
    <div className={css.containerList}>
      <ul className={css.gallery}>
        {events.map(event => (
          <li key={event.id} className={css.galleryItem}>
            <EventCard
              title={event.title}
              description={event.description}
              id={event.id}
              organizerFullName={event.organizerFullName}
              eventDate={event.eventDate}
              registeredUsers={event.registeredUsers}
              handleRegister={handleRegister}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardEventList;
