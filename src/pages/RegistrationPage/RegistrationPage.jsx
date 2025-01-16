import React from 'react';
import styles from './RegistrationPage.module.css';
import SignUp from './../../components/SignUp/SignUp';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const RegistrationPage = () => {
  <ContainerWrapper>
    <h2 className={styles.title}>Login page</h2>
    <SignUp />
  </ContainerWrapper>;
};

export default RegistrationPage;
