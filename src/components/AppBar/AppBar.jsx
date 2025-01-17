import Navigation from '../Navigation/Navigation.jsx';
import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Event Board</h2>
        <Navigation />
      </div>
    </>
  );
};

export default AppBar;
