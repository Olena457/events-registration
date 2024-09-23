import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/user">
        Register
      </NavLink>
      <NavLink className={activeLink} to="/event/:eventId">
        About Event
      </NavLink>
      <NavLink className={activeLink} to="/events">
        Create
      </NavLink>
    </div>
  );
};

export default Navigation;
