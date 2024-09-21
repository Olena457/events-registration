import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import AppBar from '../AppBar/AppBar.jsx';

function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Outlet />
    </div>
  );
}
export default Layout;
