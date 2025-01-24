import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchParticipants } from '../../redux/participants/operationsParticipants.js';
import {
  selectParticipants,
  selectParticipantsLoading,
  selectParticipantsError,
} from '../../redux/participants/selectorsParticipants.js';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import styles from './ViewParticipantsPage.module.css';

const ViewParticipantsPage = () => {
  const { cardId } = useParams();
  const dispatch = useDispatch();
  const participants = useSelector(
    state => selectParticipants(state)[cardId] || []
  );
  const loading = useSelector(selectParticipantsLoading);
  const error = useSelector(selectParticipantsError);

  useEffect(() => {
    dispatch(fetchParticipants(cardId));
  }, [dispatch, cardId]);

  return (
    <div className={styles.wrapperCard}>
      <h2 className={styles.title}>Participants</h2>
      {loading && <Loader />}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && <ParticipantList participants={participants} />}
    </div>
  );
};

export default ViewParticipantsPage;
