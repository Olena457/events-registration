// import { useOutletContext } from 'react-router-dom';
// import CardForm from '../../components/CardForm/CardForm.jsx';

// const CardFormPage = () => {
//   const { card } = useOutletContext();

//   if (!card) {
//     return <div>Card not found</div>;
//   }

//   return <CardForm card={card} />;
// };

// export default CardFormPage;
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CardForm from '../../components/CardForm/CardForm.jsx';
import styles from './CardFormPage.module.css';

const CardFormPage = () => {
  const { card } = useOutletContext();

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.formContainer}>
        <CardForm card={card} />
      </div>
    </div>
  );
};

export default CardFormPage;
