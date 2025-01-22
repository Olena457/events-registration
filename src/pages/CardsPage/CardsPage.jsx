import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operationsCards.js';
import {
  selectCards,
  selectCardsLoading,
} from '../../redux/cards/selectorsCards.js';
import Loader from '../../components/Loader/Loader.jsx';
import CardsList from '../../components/CardsList/CardsList.jsx';
import { useParams } from 'react-router-dom';
import styles from './CardsPage.module.css';

const CardsPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const loading = useSelector(selectCardsLoading);
  const { id } = useParams();
  const card = cards.find(card => card.id === id);

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
          {/* <Outlet context={{ card }} /> */}
        </div>
      ) : (
        <div className={styles.wrapperNoEvent}>
          <h4 className={styles.title}>No events found</h4>
        </div>
      )}
    </>
  );
};

export default CardsPage;
