import React, { useState, useEffect } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import css from './EventDetailsPage.module.css';
// import Loading from '../../components/Loading/Loading.jsx';

const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

const EventDetailsPage = () => {
  const { idEvent } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Access-Key': ACCESS_KEY_GET,
            },
          }
        );
        const eventsData = response.data.record.events;
        const foundEvent = eventsData.find(event => event.idEvent === idEvent);
        setEvent(foundEvent);
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEvent();
  }, [idEvent]);

  if (!event) {
    return <div>loading...</div>;
  }

  return (
    <div className={css.WrapperCard}>
      <div className={css.eventContainer}>
        <div className={css.eventInfo}>
          <p className={css.eventName}>Title: {event.title}</p>
        </div>
        <div className={css.eventInfo}>
          <p className={css.eventDescription}>
            Description: {event.description}
          </p>
        </div>
        <div className={css.eventInfo}>
          <p className={css.eventName}>Organizer: {event.organizer}</p>
        </div>
        <div className={css.eventInfo}>
          <p className={`${css.eventDate} ${css.eventName}`}>
            Date: {event.event_date}
          </p>
        </div>
        <div className={css.btnContainer}>
          <NavLink to="register" className={css.btn}>
            Register
          </NavLink>
          <NavLink to="participants" className={css.btn}>
            View
          </NavLink>
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive ? `${css.btn} ${css.active}` : css.btn
            }
          >
            Register
          </NavLink>

          <NavLink
            to="participants"
            className={({ isActive }) =>
              isActive ? `${css.btn} ${css.active}` : css.btn
            }
          >
            View
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
//  тут до аутлет додала контекст івент

export default EventDetailsPage;
