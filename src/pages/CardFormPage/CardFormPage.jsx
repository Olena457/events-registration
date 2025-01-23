// import React from 'react';
// import { useOutletContext } from 'react-router-dom';
// import CardForm from '../../components/CardForm/CardForm.jsx';
// import styles from './CardFormPage.module.css';

// const CardFormPage = () => {
//   const { card } = useOutletContext();

//   if (!card) {
//     return <div>Card not found</div>;
//   }

//   return (
//     <div className={styles.backdrop}>
//       <div className={styles.formContainer}>
//         <CardForm card={card} />
//       </div>
//     </div>
//   );
// };

// export default CardFormPage;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/cards/operationsCards.js';
import { selectCards } from '../../redux/cards/selectorsCards.js';
import ParticipantForm from '../../components/ParticipantForm/ParticipantForm.jsx';
import styles from './CardFormPage.module.css';

const CardFormPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const [card, setCard] = useState(null);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    const foundCard = cards.find(card => card.id === id);
    setCard(foundCard);
  }, [cards, id]);
  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <>
      <div className={styles.formPage}>
        <div className={styles.formContainer}>
          <ParticipantForm card={card} />
        </div>
      </div>
    </>
  );
};

export default CardFormPage;
