import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from '../../redux/auth/selectorsAuth.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : isRegistered ? (
          <Redirect to="/login" />
        ) : (
          <Redirect to="/register-user" />
        )
      }
    />
  );
};

export default PrivateRoute;
