import Card from './../Card/Card.jsx';
import styles from './cardsList.module.css';

const CardsList = ({ cards }) => {
  return (
    <div className={styles.containerList}>
      <ul className={styles.gallery}>
        {cards.map(card => (
          <li key={card.id} className={styles.galleryCard}>
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              organizer={card.organizer}
              date={card.card_date}
              participants={card.participantId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
