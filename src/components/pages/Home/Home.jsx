import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import Loading from '../../Loading/Loading.jsx';
import Section from '../../Section/Section.jsx';
import Container from '../../Container/container.jsx';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/events');
        setEvents(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = eventId => {
    console.log(`Registering for event with ID: ${eventId}`);
  };

  return (
    <>
      <Container>
        <h5 className={css.title}>Welcome to the event board!</h5>
        {loading ? (
          <Loading />
        ) : (
          <CardEventList events={events} handleRegister={handleRegister} />
        )}
      </Container>
    </>
  );
};

export default Home;
