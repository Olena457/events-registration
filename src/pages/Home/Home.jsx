import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const Home = () => {
  return (
    <ContainerWrapper>
      <h4 className={css.title}> Hello user!Welcome to the event board!</h4>
      <div className={css.contWrapper}>
        <p className={css.message}>
          Create your event now!
          <br />
          Choose the event you watn to attend!
        </p>
      </div>
      <div className={css.buttonWrapper}>
        <NavLink to="/events/:id" className={css.btnGo}>
          Go Events
        </NavLink>
        <NavLink to="/create-event" className={css.btnCreate}>
          Create Event
        </NavLink>
      </div>
    </ContainerWrapper>
  );
};

export default Home;
