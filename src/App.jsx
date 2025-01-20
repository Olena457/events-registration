import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'modern-normalize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader.jsx';
import Layout from './components/Layout/Layout.jsx';
import CardLayout from './components/CardLayout/CardLayout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage'));
const RegistrationUserPage = lazy(() =>
  import('./pages/RegistrationUserPage/RegistrationUserPage.jsx')
);
const CardFormPage = lazy(() =>
  import('./pages/CardFormPage/CardFormPage.jsx')
);
const CardDetailsPage = lazy(() =>
  import('./pages/CardDetailsPage/CardDetailsPage.jsx')
);
const ViewParticipantsPage = lazy(() =>
  import('./pages/ViewParticipantsPage/ViewParticipantsPage.jsx')
);
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound.jsx')
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register-user" element={<RegistrationUserPage />} />
            <Route path="/login" element={<LogInPage />} />

            <Route path="/cards" element={<CardLayout />}>
              <Route path=":id" element={<CardDetailsPage />} />
              <Route path="register" element={<CardFormPage />} />
              <Route
                path="participants"
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

// import Home from './pages/Home/Home.jsx';
// import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
// import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage.jsx';
// import ViewPage from './pages/ViewPage/ViewPage.jsx';
// import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

// <Route path="details" element={<EventDetailsPage />}>
{
  /* <Route path="/create-event" element={<CreateEventPage />} /> */
}
// import CreateEventPage from './pages/CreateEventPage/CreateEventPage.jsx';
import Card from './components/Card/Card';
