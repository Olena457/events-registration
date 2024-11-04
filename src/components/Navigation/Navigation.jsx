import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const { idEvent } = useParams();
  const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/events">
        Events
      </NavLink>
      {/* <NavLink className={activeLink} to={`/${idEvent}`}>
        Details
      </NavLink> */}
      {/* <NavLink className={activeLink} to={`register`}>
        Register
      </NavLink>
      <NavLink className={activeLink} to={`participants`}>
        View
      </NavLink> */}
      <NavLink className={activeLink} to="/create-event">
        Create
      </NavLink>
    </div>
  );
};

export default Navigation;
