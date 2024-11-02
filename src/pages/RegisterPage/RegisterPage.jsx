import React, { useContext } from 'react';
import css from './RegisterPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
import { EventsContext } from '../../contexts/EventsContext.js';

const RegisterPage = () => {
  const events = useContext(EventsContext);

  return (
    <ContainerWrapper>
      <h4 className={css.title}>Registration Page</h4>
      <RegistrationForm events={events} />
    </ContainerWrapper>
  );
};

export default RegisterPage;
