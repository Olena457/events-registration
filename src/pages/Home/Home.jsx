import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h4 className={css.title}> Hello user!Welcome to the event board!</h4>
      <p className={css.message}>
        Create your event now!
        <br />
        Choose the event you watn to attend!
      </p>
      <NavLink to="/events/:id" className={css.btnGo}>
        Go to Events
      </NavLink>
      <NavLink to="/create-event" className={css.btnCreate}>
        Create Event
      </NavLink>
    </div>
  );
};

export default Home;
