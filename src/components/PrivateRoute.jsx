import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from '../redux/auth/selectorsAuth.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);

  return (
    <Routes>
      <Route
        {...rest}
        element={
          isLoggedIn ? (
            <Component />
          ) : isRegistered ? (
            <Navigate to="/login" />
          ) : (
            <Navigate to="/register-user" />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
