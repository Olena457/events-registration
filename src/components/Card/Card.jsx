// import { Link } from 'react-router-dom';
// import styles from './Card.module.css';

// export default function Card({ card }) {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   // const dispatch = useDispatch();
//   // const [isRegister, setRegister] = useState(false);
//   if (!isLoggedIn) {
//     toast.info('Login first to view participants!', {
//       position: 'top-center',
//     });
//     return null;
//   }
//   return (
//     <div className={styles.cardContainer}>
//       <div className={styles.cardInfo}>
//         <p className={styles.cardName}>Title: {title}</p>
//       </div>
//       <div className={styles.cardInfo}>
//         <img
//           src={organizerImage}
//           alt={`Organizer ${organizer}`}
//           className={styles.organizerImage}
//         />
//         <p className={styles.cardName}>Organizer: {organizer}</p>
//       </div>
//       <div className={styles.cardInfo}>
//         <p className={styles.cardDescription}>Description: {description}</p>
//       </div>
//       <div className={styles.cardInfo}>
//         <p className={`${styles.cardDate} ${styles.cardName}`}>
//           Date: {card_date}
//         </p>
//       </div>
//       <div className={styles.btnContainer}>
//         <Link to={`/cards/${id}/register`} className={styles.btn}>
//           Registration
//         </Link>
//       </div>
//       <div className={styles.btnContainer}>
//         <Link to={`/cards/${id}/participants`} className={styles.btn}>
//           View
//         </Link>
//       </div>
//     </div>
//   );
// }
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './Card.module.css';

export default function Card({ card }) {
  const { title, description, date, organizer } = card;
  const organizerImage = card.organizer.imageUrl;
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    toast.info('Login first to view participants!', {
      position: 'top-center',
    });
    return null;
  }
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
      <div className={styles.cardInfo}>
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
        <Link to={`/cards/${card.id}/participants`} className={styles.btn}>
          View
        </Link>
      </div>
    </div>
  );
}
