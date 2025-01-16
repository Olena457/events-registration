import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading/Loading.jsx';
import css from './EventsPage.module.css';
import CardEventList from '../../components/CardEventList/CardEventList.jsx';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading />
      ) : events.length > 0 ? (
        <div className={css.wrapperCard}>
          <CardEventList events={events} />
        </div>
      ) : (
        <div className={css.wrapperNoEvent}>
          <h4 className={css.title}>No events found</h4>
          <p className={css.message}>
            "Hello user! Click the button to return to home"
          </p>
          <NavLink to="/" className={css.btn}>
            Return to home
          </NavLink>
        </div>
      )}
    </>
  );
};

export default EventsPage;
