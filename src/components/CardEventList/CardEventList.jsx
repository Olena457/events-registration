import React from 'react';
import EventCard from './../EventCard/EventCard.jsx';
import css from './CardEventList.module.css';

const CardEventList = () => {
  const events = useContext(EventsContext);
  return (
    <div className={css.containerList}>
      <ul className={css.gallery}>
        {events.map(event => (
          <li key={event.id} className={css.galleryEvent}>
            <EventCard
              title={event.title}
              description={event.description}
              organizer={event.organizer}
              event_date={event.event_date}
              idEvent={event.id}
              participantId={event.participantId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardEventList;
