// import { useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Card.module.css';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
// import { selectFavoritesIds } from '../../redux/favorites/selectorsFavorites.js';
// import { toggleFavorite } from '../../redux/favorites/operationsFavorites.js';
// import Icon from '../Icon/Icon.jsx';

// export default function Card({ card }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const favoriteIndexes = useSelector(selectFavoritesIds);
//   const dispatch = useDispatch();
//   const [isLiked, setLiked] = useState(favoriteIndexes.includes(card.id));
//   const { title, description, date, organizer } = card;
//   const organizerImage = card.organizer.avatar_url;

//   const handleLike = useCallback(() => {
//     if (!isLoggedIn) {
//       toast.info('Login first to save favorites!', {
//         position: 'top-center',
//       });
//     } else {
//       setLiked(prev => !prev);
//       dispatch(toggleFavorite(card));
//     }
//   }, [isLoggedIn, dispatch, card]);

//   return (
//     <>
//       <div className={styles.cardContainer}>
//         <div className={styles.cardInfoTitle}>
//           {/* <p className={styles.label}>Event:</p> */}
//           <h3 className={styles.cardName}>{title}</h3>
//           <div className={styles.likeContainer}>
//             <button
//               className={styles.likeBtn}
//               type="button"
//               onClick={handleLike}
//               aria-label="button like"
//             >
//               {isLiked ? (
//                 <Icon
//                   id="heart-full"
//                   role="button"
//                   width={26}
//                   height={26}
//                   className={`heartIconFull ${styles.heartIconFull}`}
//                   fillColor="#f00b0b"
//                   inert="false"
//                 />
//               ) : (
//                 <Icon
//                   id="heart-transparent"
//                   role="button"
//                   width={26}
//                   height={26}
//                   className={`heartIcon ${styles.heartIcon}`}
//                   fillColor="#121417"
//                   inert="false"
//                 />
//               )}
//             </button>
//           </div>
//         </div>
//         <div className={styles.cardInfo}>
//           {/* <p className={styles.label}>Description:</p> */}
//           <p className={styles.cardDescription}>{description}</p>
//         </div>
//         <div className={styles.cardInfoTeacher}>
//           <img
//             src={organizerImage}
//             alt={`Organizer ${organizer.full_name}`}
//             className={styles.organizerImage}
//           />
//           <div>
//             <Icon
//               id="instagram"
//               role="presentation"
//               width={26}
//               height={26}
//               className={`instagram ${styles.comonStyle}`}
//               fillColor="#121417"
//               inert="false"
//             />
//             <Icon
//               id="twitter"
//               role="presentation"
//               width={26}
//               height={26}
//               className={`instagram ${styles.comonStyle}`}
//               fillColor="#121417"
//               inert="false"
//             />
//             <Icon
//               id="facebook"
//               role="presentation"
//               width={26}
//               height={26}
//               className={`instagram ${styles.comonStyle}`}
//               fillColor="#121417"
//               inert="false"
//             />
//             <Icon
//               id="linkedin"
//               role="presentation"
//               width={26}
//               height={26}
//               className={`instagram ${styles.comonStyle}`}
//               fillColor="#121417"
//               inert="false"
//             />
//           </div>
//           <div className={styles.organizerTextContainer}>
//             <p className={styles.label}>Organizer:</p>
//             <p className={styles.cardName}>{organizer.full_name}</p>
//           </div>
//         </div>
//         <div className={styles.cardInfo}>
//           <p className={styles.label}>Date:</p>
//           <p className={styles.cardDate}>{new Date(date).toLocaleString()}</p>
//         </div>
//         <div className={styles.btnContainer}>
//           <Link to={`/cards/${card.id}/register`} className={styles.btn}>
//             Registration
//           </Link>
//           <Link to={`/cards/${card.id}/participants`} className={styles.btn}>
//             Participants
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
import React from 'react';
import styles from './Card.module.css';
import Icon from '../Icon/Icon.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { selectFavoritesIds } from '../../redux/favorites/selectorsFavorites.js';
import { toggleFavorite } from '../../redux/favorites/operationsFavorites.js';
import { toast } from 'react-toastify';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ card }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteIndexes = useSelector(selectFavoritesIds);
  const dispatch = useDispatch();
  const [isLiked, setLiked] = useState(favoriteIndexes.includes(card.id));
  const { title, description, date, organizer } = card;
  const organizerImage = card.organizer.avatar_url;

  const handleLike = useCallback(() => {
    if (!isLoggedIn) {
      toast.info('Register first to save favorites!', {
        position: 'top-center',
      });
    } else {
      setLiked(prev => !prev);
      dispatch(toggleFavorite(card));
    }
  }, [isLoggedIn, dispatch, card]);

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
            fillColor="#f00b0b"
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
          src={organizerImage}
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
                id="twitter"
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
        <p className={styles.cardName}>{organizer.full_name}</p>
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
