import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  const activeLink = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <div className={styles.container}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/cards">
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
