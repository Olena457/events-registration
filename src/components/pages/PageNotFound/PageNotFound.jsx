import css from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className={css.containerPage404}>
        <div className={css.table}>
          <h2 className={css.titlePage}>404</h2>
          <p>Page Not Found</p>
        </div>
        <div className={css.arrow}></div>
        <p className={css.message}>{`Press "Go Back" to return.`}</p>
        <Link to="/" className={css.goBack}>
          Go Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
