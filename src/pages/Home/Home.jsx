import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';
// import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';

const Home = () => {
  return (
    <div className={styles.containerHome}>
      <h4 className={styles.title}> Hello user!Welcome to the events board!</h4>
      <div className={styles.contWrapper}>
        <p className={styles.message}>
          Choose the event you watn to attend!
          <br /> Register for the event so you do not miss out!
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink to="/cards" className={styles.btnGo}>
          Go Events
        </NavLink>
        <NavLink to="/create-card" className={styles.btnCreate}>
          Create Event
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
