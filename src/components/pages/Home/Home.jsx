import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import Loading from '../../Loading/Loading.jsx';
// import Section from './../../Section/Section.jsx';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
        );
        const eventsData = response.data;

        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const formattedEvents = eventsData.map(event => ({
            idEvent: event.idEvent || 'No Id',
            title: event.title || 'No Title',
            descriptionEvent: event.descriptionEvent || 'No Description',
            date: event.date || 'No Date',
            organizerFullName: event.organizerFullName || 'No Organizer',
          }));
          setEvents(formattedEvents);
          setLoading(false);
        }
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
      ) : (
        <div className={css.wrapperCard}>
          <CardEventList events={events} handleRegister={handleRegister} />
        </div>
      )}
    </>
  );
};

export default Home;
