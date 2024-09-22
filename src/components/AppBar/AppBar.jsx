import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>Event Board</h2>
        <Navigation />
      </div>
    </>
  );
};

export default AppBar;
