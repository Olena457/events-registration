import Navigation from '../Navigation/Navigation.jsx';
import css from './AppB.module.css';
import { FcTwoSmartphones } from 'react-icons/fc';

export const AppBar = () => {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}>
          Event Board
          <FcTwoSmartphones style={{ marginLeft: '10px' }} />
        </h2>
        <Navigation />
      </div>
    </>
  );
};

export default AppBar;
