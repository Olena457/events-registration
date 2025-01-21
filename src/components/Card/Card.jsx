import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import styles from './Card.module.css';

export default function Card({ card }) {
  const navigate = useNavigate();
  const { title, description, date, organizer } = card;
  const organizerImage = card.organizer.avatar_url;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleViewParticipants = () => {
    if (!isLoggedIn) {
      toast.info('Login first to view participants!', {
        position: 'top-center',
      });
      navigate('/login');
    } else {
      navigate(`/cards/${card.id}/participants`);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>Title: {title}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardDescription}>Description: {description}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={`${styles.cardDate} ${styles.cardName}`}>
          Date: {new Date(date).toLocaleString()}
        </p>
      </div>
      <div className={styles.cardInfoTeacher}>
        <img
          src={organizerImage}
          alt={`Organizer ${organizer.full_name}`}
          className={styles.organizerImage}
        />
        <p className={styles.cardName}>Organizer: {organizer.full_name}</p>
      </div>

      <div className={styles.btnContainer}>
        <Link to={`/cards/${card.id}/register`} className={styles.btn}>
          Registration
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handleViewParticipants} className={styles.btn}>
          View Participants
        </button>
      </div>
    </div>
  );
}
