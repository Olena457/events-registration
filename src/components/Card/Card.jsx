import styles from './Card.module.css';
import Icon from '../Icon/Icon.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserId,
} from '../../redux/auth/selectorsAuth.js';
import { selectFavoritesIds } from '../../redux/favorites/selectorsFavorites.js';
import { toggleFavorite } from '../../redux/favorites/operationsFavorites.js';
import { deleteCard } from '../../redux/createCard/operationsCreateCard.js';
import { toast } from 'react-toastify';
import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import defaultAvatar from '../../assets/icons/user.svg';

export default function Card({ card }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);
  const favoriteIndexes = useSelector(selectFavoritesIds);
  const [isLiked, setLiked] = useState(favoriteIndexes.includes(card.id));
  const { title, description, date, organizer } = card;
  const organizerAvatar = organizer.avatar_url || defaultAvatar;

  const handleLike = useCallback(() => {
    if (!isLoggedIn) {
      toast.info('Login first to save favorites!', {
        position: 'top-center',
      });
    } else {
      setLiked(prev => !prev);
      dispatch(toggleFavorite(card));
    }
  }, [isLoggedIn, dispatch, card]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteCard(card.id)).unwrap();
      toast.success('Event deleted successfully!', {
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Error deleting event. Please try again later.', {
        position: 'top-center',
      });
    }
  };

  const handleRegisterClick = () => {
    const eventDate = new Date(date);
    const currentDate = new Date();

    if (eventDate < currentDate) {
      toast.error('Cannot register. The event has ended.', {
        position: 'top-center',
      });
      navigate('/cards');
      return;
    }

    navigate(`/cards/${card.id}/register`);
  };

  const eventDate = new Date(date);
  const currentDate = new Date();
  const isEventPast = eventDate < currentDate;

  return (
    <div className={styles.cardContainer}>
      <button
        type="button"
        className={styles.likeBtn}
        onClick={handleLike}
        aria-label="button like"
      >
        {isLiked ? (
          <Icon
            id="heart-full"
            role="button"
            width={26}
            height={26}
            className={styles.heartIconFull}
            fillColor="#00eeff"
            inert="false"
          />
        ) : (
          <Icon
            id="heart-transparent"
            role="button"
            width={26}
            height={26}
            className={styles.heartIcon}
            fillColor="#121417"
            inert="false"
          />
        )}
      </button>
      <div className={styles.cardInfoTitle}>
        <h3 className={styles.cardName}>{title}</h3>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardInfoTeacher}>
        <img
          src={organizerAvatar}
          alt={`Organizer ${organizer.full_name}`}
          className={styles.organizerImage}
        />
        <div className={styles.social}>
          <div className={styles.socialItem}>
            <a href="#" className={styles.socialLink}>
              <Icon
                id="instagram"
                className={styles.socialIcon}
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="#" className={styles.socialLink}>
              <Icon
                id="facebook"
                className={styles.socialIcon}
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className={styles.socialItem}>
            <a href="#" className={styles.socialLink}>
              <Icon
                id="linkedin"
                className={styles.socialIcon}
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.organizerTextContainer}>
        <p className={styles.label}>Organizer:</p>
        <p className={styles.cardNameOrg}>{organizer.full_name}</p>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.label}>Date:</p>
        <p className={styles.cardDate}>
          {isEventPast ? 'Event ended' : new Date(date).toLocaleString()}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handleRegisterClick} className={styles.btn}>
          Registration
        </button>
        <Link to={`/cards/${card.id}/participants`} className={styles.btn}>
          Participants
        </Link>
        {isLoggedIn && organizer.userId === userId && (
          <button onClick={handleDelete} className={styles.deleteBtn}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
