import { FaArrowDown } from 'react-icons/fa';
import css from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className={css.containerPage404}>
        <div className={css.table}>
          <h2 className={css.titlePage}>Page Not Found 404</h2>
        </div>
        Press the bottom Home
        <FaArrowDown size={80} color="red" />
        <Link to="/" className={css.btnGo}>
          Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;