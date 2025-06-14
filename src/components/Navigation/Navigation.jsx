import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLink = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <div className={styles.containerLink}>
      <NavLink to="/" className={activeLink} aria-label="Home">
        Home
      </NavLink>
      <NavLink to="/cards" className={activeLink} aria-label="Events">
        Events
      </NavLink>
      {!isLoggedIn && (
        <>
          <NavLink to="/login" className={activeLink} aria-label="Login">
            Login
          </NavLink>
          <NavLink
            to="/register-user"
            className={activeLink}
            aria-label="Register"
          >
            Register
          </NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <NavLink
            to="/favorites"
            className={activeLink}
            aria-label="Favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            to="/create-card"
            className={activeLink}
            aria-label="Create Event"
          >
            Create Event
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navigation;
