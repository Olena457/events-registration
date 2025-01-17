import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ title, description, id, organizer, card_date }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>Title: {title}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardDescription}>Description: {description}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>Organizer: {organizer}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={`${styles.cardDate} ${styles.cardName}`}>
          Date: {card_date}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/cards/${id}/register`} className={styles.btn}>
          Registration
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/cards/${id}/participants`} className={styles.btn}>
          View
        </Link>
      </div>
    </div>
  );
}

// import { useParams } from 'react-router-dom';

// export function Book() {
//   const { id } = useParams();

//   return <h1>Book {id}</h1>;
// }
