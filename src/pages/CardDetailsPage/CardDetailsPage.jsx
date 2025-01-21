// import React from 'react';
// import { Outlet, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectCards } from '../../redux/cards/selectorsCards.js';

// import styles from './CardDetailsPage.module.css';

// const CardDetailsPage = () => {
//   const { id } = useParams();
//   const cards = useSelector(selectCards);
//   const card = cards.find(card => card.id === id);

//   if (!card) {
//     return <div>Card not found</div>;
//   }

//   return (
//     <div className={styles.WrapperCard}>
//       <h1>{card.title}</h1>
//       <p>{card.description}</p>
//       <Outlet context={{ card }} />
//     </div>
//   );
// };

// export default CardDetailsPage;
