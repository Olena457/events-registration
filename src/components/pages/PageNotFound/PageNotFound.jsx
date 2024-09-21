import { Container } from '../../Container/container.jsx';
import css from './PageNotFound.module.css';
import { Link } from 'react-router-dom';
import { Section } from './../../Section/Section';

const PageNotFound = () => {
  return (
    <>
      <Section>
        <Container>
          <div className={css.containerPage404}>
            <div className={css.table}>
              <h2 className={style.titlePage}>404</h2>
              <p>Page Not Found</p>
            </div>
            <div className={css.arrow}></div>
            <p className={css.message}>{`Press "Go Back" to return.`}</p>
            <Link to="/" className={css.goBack}>
              Go Home
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PageNotFound;
