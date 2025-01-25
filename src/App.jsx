import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'modern-normalize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase/firebaseConfig.js';
import { refreshUser } from './redux/auth/operationsAuth.js';
import { selectIsRefreshing } from './redux/auth/selectorsAuth.js';

import Loader from './components/Loader/Loader.jsx';
import Layout from './components/Layout/Layout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage.jsx'));
const RegistrationUserPage = lazy(() =>
  import('./pages/RegistrationUserPage/RegistrationUserPage.jsx')
);
const CardFormPage = lazy(() =>
  import('./pages/CardFormPage/CardFormPage.jsx')
);
const ViewParticipantsPage = lazy(() =>
  import('./pages/ViewParticipantsPage/ViewParticipantsPage.jsx')
);
const FavoritesCardPage = lazy(() =>
  import('./pages/FavoritesCardPage/FavoritesCardPage.jsx')
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound.jsx')
);
const CardsPage = lazy(() => import('./pages/CardsPage/CardsPage.jsx'));
const CreateCardPage = lazy(() =>
  import('./pages/CreateCardPage/CreateCardPage.jsx')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(refreshUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register-user" element={<RegistrationUserPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/create-card" element={<CreateCardPage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/cards/:id/register" element={<CardFormPage />} />
            <Route
              path="/cards/:id/participants"
              element={<ViewParticipantsPage />}
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  redirectTo="/"
                  component={<FavoritesCardPage />}
                />
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
