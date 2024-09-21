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
      <NavLink className={activeLink} to="/register">
        Register
      </NavLink>
      <NavLink className={activeLink} to="/about/:eventId">
        About Event
      </NavLink>
      <NavLink className={activeLink} to="/createEvent/:eventId">
        Create Event
      </NavLink>
    </div>
  );
};

export default Navigation;
