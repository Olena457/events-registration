import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';
import { useParams } from 'react-router-dom';

export const AppBar = () => {
  const { idEvent } = useParams();
  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>Event Board</h2>
        <Navigation idEvent={idEvent} />
      </div>
    </>
  );
};

export default AppBar;
