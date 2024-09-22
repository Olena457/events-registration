import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import { Container } from './../../Container/container.jsx';
import { Loading } from '../../Loading/Loading.jsx';
import { Section } from '../../Section/Section.jsx';
const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '258bb3d0';
  const SCHEMA_NAME = 'event/:eventid'; // Замість YOUR_SCHEMA_NAME вкажіть ім'я вашої схеми

  useEffect(() => {
    axios
      .get(`https://api.mockaroo.com/api/${SCHEMA_NAME}?key=${API_KEY}`)
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Section>
        <Container>
          <h5 className={css.title}>Welcome to the event board!</h5>
          {loading ? (
            <p>Loading...</p> && <Loading />
          ) : (
            <CardEventList events={events} />
          )}
          <Link to="/create" className={css.eventBtn}>
            New Event
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default Home;
