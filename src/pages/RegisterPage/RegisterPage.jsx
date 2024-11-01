import React from 'react';
import css from './RegisterPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const RegisterPage = () => {
  return (
    <ContainerWrapper>
      <h4 className={css.title}>Registration Page</h4>
      <RegistrationForm />
    </ContainerWrapper>
  );
};

export default RegisterPage;
