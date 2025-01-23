import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operationsAuth.js';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './AppBar.module.css';
// import logoutIcon from '../../assets/icons/logout.svg';

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Event Board</h2>
      <Navigation />
      {isLoggedIn && (
        <div className={styles.sigWrapper}>
          <button
            type="button"
            onClick={() => dispatch(logoutUser())}
            className={styles.buttonLogin}
            aria-label="log out"
          >
            {/* <img
              src={logoutIcon}
              alt="Logout icon"
              className={`logoutIcon ${styles.logoutIcon}`}
              role="button"
              inert="false"
            /> */}
            <span className={styles.loginText}>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AppBar;
