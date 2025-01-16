import React from 'react';
import styles from './RegisterPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
const EventRegisterPage = () => {
  return (
    <ContainerWrapper>
      <h4 className={styles.title}>Registration Page</h4>
      <RegistrationForm />
    </ContainerWrapper>
  );
};

export default EventRegisterPage;
