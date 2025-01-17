import React from 'react';
import Card from './../Card/Card.jsx';
import styles from './cardsList.module.css';

const CardsList = () => {
  return (
    <div className={styles.containerList}>
      <ul className={styles.gallery}>
        {cards.map(card => (
          <li key={card.id} className={styles.galleryCard}>
            <Card
              title={card.title}
              description={card.description}
              organizer={card.organizer}
              card_date={card.card_date}
              idcard={card.id}
              participantId={card.participantId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardsList;
