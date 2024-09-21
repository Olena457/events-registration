import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ParticipantList from '../../ParticipantList/ParticipantList.jsx';
import { Section } from './../../Section/Section.jsx';
import { Container } from './../../Container/container.jsx';
import { Link } from 'react-router-dom';
import css from './AboutEvent.module.css';

const AboutEvent = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loadingParticipants, setLoadingParticipants] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://mockapi.io/api/v1/events/${eventId}/participants`)
      .then(response => {
        setParticipants(response.data);
        setLoadingParticipants(false);
      })
      .catch(error => {
        console.error('Error fetching participants:', error);
        setError(error);
        setLoadingParticipants(false);
      });
  }, [eventId]);

  return (
    <>
      <Section>
        <Container>
          <h1>Participants for Event {eventId}</h1>
          <ParticipantList
            participants={participants}
            loading={loadingParticipants}
            error={error}
          />
          <>
            <Link to="/" className={css.btnHome}>
              Home
            </Link>
          </>
        </Container>
      </Section>
    </>
  );
};

export default AboutEvent;
