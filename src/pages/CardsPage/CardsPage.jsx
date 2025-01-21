import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operationsCards.js';
import {
  selectCards,
  selectCardsLoading,
} from '../../redux/cards/selectorsCards.js';
import Loader from '../../components/Loader/Loader.jsx';
import CardsList from '../../components/CardsList/CardsList.jsx';
import { NavLink } from 'react-router-dom';
import styles from './CardsPage.module.css';

const CardsPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectCardsLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : cards.length > 0 ? (
        <div className={styles.wrapperCard}>
          <CardsList cards={cards} />
        </div>
      ) : (
        <div className={styles.wrapperNoEvent}>
          <h4 className={styles.title}>No events found</h4>
          <p className={styles.message}>
            "Hello user! Click the button to return to home"
          </p>
          <NavLink to="/" className={styles.btn}>
            Return to home
          </NavLink>
        </div>
      )}
    </>
  );
};

export default CardsPage;
