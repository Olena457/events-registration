import React from 'react';
import styles from './CardFormPage.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
import CardForm from '../../components/CardForm/CardForm.jsx';
const CardFormPage = () => {
  return (
    <ContainerWrapper>
      <h4 className={styles.title}>Registration Event Page</h4>
      <CardForm />
    </ContainerWrapper>
  );
};

export default CardFormPage;
