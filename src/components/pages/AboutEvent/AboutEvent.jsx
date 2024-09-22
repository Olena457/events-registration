import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ParticipantList from '../../ParticipantList/ParticipantList.jsx';
import Container from './../../Container/container.jsx';
import css from './AboutEvent.module.css';

const AboutEvent = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loadingParticipants, setLoadingParticipants] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/events/:${eventId}`)
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
    <Container>
      <h1 className={css.title}>Participants for Event {eventId}</h1>
      <ParticipantList
        participants={participants}
        loading={loadingParticipants}
        error={error}
      />
    </Container>
  );
};

export default AboutEvent;
