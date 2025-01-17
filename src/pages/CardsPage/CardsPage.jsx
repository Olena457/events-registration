import { NavLink } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader.jsx';
import styles from './EventsPage.module.styles';
import CardsList from '../../components/CardsList/CardsList.jsx';

const CardsPage = () => {
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
