import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const { id } = useParams();
  const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <div className={css.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/card">
        Events
      </NavLink>

      <NavLink className={activeLink} to="/login">
        Login
      </NavLink>
      <NavLink className={activeLink} to="/register-user">
        Register
      </NavLink>
    </div>
  );
};

export default Navigation;

{
  /* <NavLink className={activeLink} to={`/${idEvent}`}>
        Details
      </NavLink> */
}
{
  /* <NavLink className={activeLink} to={`register`}>
        Register
      </NavLink>
      <NavLink className={activeLink} to={`participants`}>
        View
      </NavLink> */
}
