import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = ({ eventId }) => {
  const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to={`/register-event/${eventId}`}>
        Register
      </NavLink>
      <NavLink className={activeLink} to={`/event/${eventId}/participants`}>
        About Event
      </NavLink>
      <NavLink className={activeLink} to="/create-event">
        Create
      </NavLink>
    </div>
  );
};

export default Navigation;
