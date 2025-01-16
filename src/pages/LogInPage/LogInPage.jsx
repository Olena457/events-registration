import React from 'react';
import SignIn from './../../components/SignIn/SignIn';
import styles from './LogInPage.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const LogInPage = () => {
  return (
    <ContainerWrapper>
      <h2 className={styles.title}>Login page</h2>
      <SignIn />
    </ContainerWrapper>
  );
};

export default LogInPage;
