import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import css from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className={css.containerPage404}>
        <div className={css.table}>
          <h2 className={css.titlePage}>Page Not Found 404</h2>
        </div>
        <motion.h1
          className={css.message}
          animate={{ color: ['#000000', '#FF0000', '#000000'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          Press the bottom Home
        </motion.h1>
        <motion.div
          className={css.arrow}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FaArrowDown size={80} color="red" />
        </motion.div>
        <Link to="/" className={css.btn}>
          Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
