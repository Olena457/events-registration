import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { selectFavoritesIds } from '../../redux/favorites/selectorsFavorites.js';
import { toggleFavorite } from '../../redux/favorites/operationsFavorites.js';
import Icon from '../Icon/Icon.jsx';

export default function Card({ card }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteIndexes = useSelector(selectFavoritesIds);
  const dispatch = useDispatch();
  const [isLiked, setLiked] = useState(favoriteIndexes.includes(card.id));
  const { title, description, date, organizer } = card;
  const organizerImage = card.organizer.avatar_url;

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

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInfo}>
        <p className={styles.label}>Title:</p>
        <p className={styles.cardName}>{title}</p>
      </div>
      <button type="button" onClick={handleLike} aria-label="button like">
        {isLiked ? (
          <Icon
            id="heart-full"
            role="button"
            width={26}
            height={26}
            className={`heartIconFull ${styles.heartIconFull}`}
            fillColor="#f00b0b"
            inert="false"
          />
        ) : (
          <Icon
            id="heart-transparent"
            role="button"
            width={26}
            height={26}
            className={`heartIcon ${styles.heartIcon}`}
            fillColor="#121417"
            inert="false"
          />
        )}
      </button>
      <div className={styles.cardInfo}>
        <p className={styles.label}>Description:</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardInfoTeacher}>
        <img
          src={organizerImage}
          alt={`Organizer ${organizer.full_name}`}
          className={styles.organizerImage}
        />
        <div className={styles.organizerTextContainer}>
          <p className={styles.label}>Organizer:</p>
          <p className={styles.cardName}>{organizer.full_name}</p>
        </div>
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.label}>Date:</p>
        <p className={styles.cardDate}>{new Date(date).toLocaleString()}</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/cards/${card.id}/register`} className={styles.btn}>
          Registration
        </Link>
        <Link to={`/cards/${card.id}/participants`} className={styles.btn}>
          Participants
        </Link>
      </div>
    </div>
  );
}
