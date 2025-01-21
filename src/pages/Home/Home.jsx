import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operationsCards.js';
import {
  selectCards,
  selectCardsLoading,
} from '../../redux/cards/selectorsCards.js';
import CardsList from '../../components/CardsList/CardsList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectCardsLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <ContainerWrapper>
      <h4 className={styles.title}> Hello user!Welcome to the events board!</h4>
      <div className={styles.contWrapper}>
        <p className={styles.message}>
          Choose the event you want to attend!
          <br />
          Register for the event so you do not miss out!
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink to="/cards" className={styles.btnGo}>
          Go Events
        </NavLink>
      </div>
      <h1>Events</h1>
      <CardsList cards={cards} />
    </ContainerWrapper>
  );
};

export default Home;
