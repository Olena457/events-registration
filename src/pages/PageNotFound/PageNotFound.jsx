import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className={styles.containerPage404}>
        <div className={styles.table}>
          <h2 className={styles.titlePage}>Page Not Found 404</h2>
        </div>
        Press the bottom Home
        <Link to="/" className={styles.btnGo}>
          Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
