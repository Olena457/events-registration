import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import css from './Home.module.css';
import Loading from '../../components/Loading/Loading.jsx';
import { Link } from 'react-router-dom';
import CardEventList from '../../components/CardEventList/CardEventList.jsx';

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
const MY_BIN_ID = '67235bc6e41b4d34e44bd6ab';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Master-Key': API_KEY,
            },
          }
        );
        const eventsData = response.data.record.events;
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const formattedEvents = eventsData.map(event => ({
            idEvent: event.idEvent,
            title: event.title,
            description: event.description,
            dateEvent: event.dateEvent,
            organizer: event.organizer,
          }));
          setEvents(formattedEvents);
        } else {
          setEvents([]);
        }
        setLoading(false);
      } catch (error) {
        toast.error('Error fetching events: ' + error.message);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleRegister = eventId => {
    console.log(`Registering for event with ID: ${eventId}`);
    toast.success(`Successfully registered for event with ID: ${eventId}`);
  };

  return (
    <>
      <h4 className={css.title}>Welcome to the event board!</h4>
      {loading ? (
        <Loading />
      ) : events.length > 0 ? (
        <div className={css.wrapperCard}>
          <CardEventList events={events} handleRegister={handleRegister} />
        </div>
      ) : (
        <div className={css.wrapperNoEvent}>
          <h4 className={css.titleNo}>No events found</h4>
          <p className={css.message}>
            "Hello user! Create your event now!
            <br />
            Click below to add a new card."
          </p>
          <Link to="/create-event" className={css.btn}>
            Create
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
