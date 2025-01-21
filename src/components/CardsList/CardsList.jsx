import Card from './../Card/Card.jsx';
import styles from './cardsList.module.css';

const CardsList = ({ cards }) => {
  return (
    <>
      <div className={styles.containerList}>
        <ul className={styles.gallery}>
          {cards.map(card => (
            <li key={card.id} className={styles.galleryCard}>
              <Card card={card} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardsList;
