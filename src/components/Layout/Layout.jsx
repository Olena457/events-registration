import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar.jsx';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className={styles.container}>{children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
