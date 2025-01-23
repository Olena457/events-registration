// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   selectCardsError,
//   selectCardsLoading,
// } from '../../redux/cards/selectorsCards.js';
// import Card from '../Card/Card.jsx';
// import styles from './CardsList.module.css';
// import Loader from '../Loader/Loader.jsx';

// const PER_PAGE = 3;

// const CardsList = ({ cards }) => {
//   const loading = useSelector(selectCardsLoading);
//   const error = useSelector(selectCardsError);

//   const [page, setPage] = useState(1);
//   const [visiblecards, setVisiblecards] = useState(
//     cards.slice(0, page * PER_PAGE) || []
//   );

//   const isVisible = page * PER_PAGE < cards.length || false;

//   useEffect(() => {
//     setVisiblecards(cards.slice(0, page * PER_PAGE) || []);
//   }, [cards, page]);

//   const handleShowMore = () => {
//     setPage(prev => prev + 1);
//   };

//   return (
//     <>
//       {loading && <Loader />}
//       {error && <p role="alert">Error: {error}</p>}

//       {!loading && cards?.length > 0 && (
//         <div className={styles.containerList}>
//           <ul className={styles.list} aria-live="polite" aria-atomic="true">
//             {visiblecards.map(card => (
//               <Card key={card.id} card={card} />
//             ))}
//           </ul>
//           {isVisible && (
//             <div className={styles.buttonContainer}>
//               <button
//                 type="button"
//                 className={styles.moreBtn}
//                 onClick={handleShowMore}
//                 aria-label="Load more cards"
//               >
//                 Load more
//               </button>
//             </div>
//           )}
//           {!loading && cards?.length === 0 && (
//             <p className={styles.message}>No cards found.</p>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default CardsList;
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsError,
  selectCardsLoading,
} from '../../redux/cards/selectorsCards.js';
import Card from '../Card/Card.jsx';
import styles from './CardsList.module.css';
import Loader from '../Loader/Loader.jsx';

const CardsList = ({ cards }) => {
  const loading = useSelector(selectCardsLoading);
  const error = useSelector(selectCardsError);

  const [visibleCards, setVisibleCards] = useState(cards || []);

  useEffect(() => {
    setVisibleCards(cards);
  }, [cards]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className={styles.message}>Error loading cards: {error}</p>;
  }

  return (
    <>
      <div className={styles.containerList}>
        <ul className={styles.gallery}>
          {visibleCards.map(card => (
            <li key={card.id} className={styles.galleryCard}>
              <Card card={card} />
            </li>
          ))}
        </ul>
        {!loading && cards?.length === 0 && (
          <p className={styles.message}>No cards found.</p>
        )}
      </div>
    </>
  );
};

export default CardsList;
