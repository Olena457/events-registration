import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCreateCardError,
  selectCreateCardLoading,
} from '../../redux/createCard/selectorsCreateCard.js';
import Card from '../Card/Card.jsx';
import styles from './CardsList.module.css';
import Loader from '../Loader/Loader.jsx';

const CardsList = ({ cards }) => {
  const loading = useSelector(selectCreateCardLoading);
  const error = useSelector(selectCreateCardError);

  const [visibleCards, setVisibleCards] = useState(cards || []);

  useEffect(() => {
    setVisibleCards(cards);
  }, [cards]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className={styles.message}>Error loading cards: {error}</p>;
  }

  return (
    <>
      <div className={styles.containerList}>
        <ul className={styles.gallery}>
          {visibleCards.map(card => (
            <li key={card.id} className={styles.galleryCard}>
              <Card card={card} />
            </li>
          ))}
        </ul>
        {!loading && cards?.length === 0 && (
          <p className={styles.message}>No cards found.</p>
        )}
      </div>
    </>
  );
};

export default CardsList;
