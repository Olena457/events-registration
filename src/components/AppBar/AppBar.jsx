import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operationsAuth.js';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import Navigation from '../Navigation/Navigation.jsx';
import styles from './AppBar.module.css';
import logoEye from '../../assets/icons/logo-eye.svg';

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.brand}>
          <h2 className={styles.title}>Event Board</h2>

          <div className={styles.logoContainer}>
            <img
              src={logoEye}
              alt="logo-eye"
              className={styles.logo}
              role="img"
            />
          </div>
        </div>
        <Navigation />
        {isLoggedIn && (
          <div className={styles.sigWrapper}>
            <button
              type="button"
              onClick={() => dispatch(logoutUser())}
              className={styles.buttonLogout}
              aria-label="log out"
            >
              <span className={styles.logoutText}>Log out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
