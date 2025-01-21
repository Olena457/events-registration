import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'modern-normalize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader.jsx';
import Layout from './components/Layout/Layout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage'));
const RegistrationUserPage = lazy(() =>
  import('./pages/RegistrationUserPage/RegistrationUserPage.jsx')
);
const CardFormPage = lazy(() =>
  import('./pages/CardFormPage/CardFormPage.jsx')
);
const ViewParticipantsPage = lazy(() =>
  import('./pages/ViewParticipantsPage/ViewParticipantsPage.jsx')
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound.jsx')
);
const CardsPage = lazy(() => import('./pages/CardsPage/CardsPage.jsx'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register-user" element={<RegistrationUserPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/cards" element={<CardsPage />}>
              <Route path=":id/register" element={<CardFormPage />} />
              <Route
                path=":id/participants"
                element={<PrivateRoute component={ViewParticipantsPage} />}
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
