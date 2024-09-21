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

  useEffect(() => {
    axios
      .get('https://mockapi.io/api/v1/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Section>
        <Container>
          <h2 className={css.title}>Welcome to the event board!</h2>
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
