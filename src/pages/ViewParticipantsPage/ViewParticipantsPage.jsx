import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParticipants } from '../../redux/participants/operationsParticipants.js';
import {
  selectParticipants,
  selectParticipantsLoading,
} from '../../redux/participants/selectorsParticipants.js';
import Loader from '../../components/Loader/Loader.jsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import styles from './ViewParticipantsPage.module.css';

const ViewParticipantsPage = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const participants = useSelector(selectParticipants);
  const loading = useSelector(selectParticipantsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    if (cardId) {
      dispatch(fetchParticipants(cardId));
    }
  }, [dispatch, cardId]);

  if (loading) {
    return <Loader />;
  }

  const participantsArray = participants[cardId]
    ? Object.values(participants[cardId])
    : [];

  return (
    <div className={styles.wrapperCard}>
      <h2 className={styles.title}>Participants for Event {cardId}</h2>
      <ParticipantList participants={participantsArray} />
    </div>
  );
};

export default ViewParticipantsPage;
