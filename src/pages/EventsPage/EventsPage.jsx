import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loading from '../../components/Loading/Loading.jsx';
import { Link } from 'react-router-dom';
import css from './EventsPage.module.css';
import CardEventList from '../../components/CardEventList/CardEventList.jsx';

const ACCESS_KEY = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Master-Key': ACCESS_KEY,
            },
          }
        );
        const eventsData = response.data.record.events;
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const formattedEvents = eventsData.map(event => ({
            idEvent: event.idEvent,
            title: event.title,
            description: event.description,
            dateEvent: event.event_date,
            organizer: event.organizer,
          }));
          setEvents(formattedEvents);
        } else {
          setEvents([]);
        }
        setLoading(false);

        // console.log('Response data:', response.data);
        // console.log('Events:', response.data.record.events);
      } catch (error) {
        toast.error('Error fetching events: ' + error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
          <Link to="/" className={css.btn}>
            Return to home
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default EventsPage;
