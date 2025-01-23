// import { Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   selectIsLoggedIn,
//   selectIsRegistered,
// } from '../redux/auth/selectorsAuth.js';

// const PrivateRoute = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRegistered = useSelector(selectIsRegistered);

//   if (!isRegistered) {
//     return <Navigate to="/register-user" />;
//   }

//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectorsAuth.js';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn: ', isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
