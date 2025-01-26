import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <h4 className={styles.title}> Welcome to Event Board!</h4>
      <div className={styles.contWrapper}>
        <p className={styles.message}>
          Create events or find the ones that interest you!
          <br />
          Sign up and log in to enjoy all features.
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink
          to="/cards"
          className={`${styles.buttonHome} ${styles.buttonMargin}`}
        >
          Go Events
        </NavLink>
        <NavLink to="/create-card" className={styles.buttonHome}>
          Create Event
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
