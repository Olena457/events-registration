import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import 'modern-normalize';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './components/Loading/Loading.jsx';
import Layout from './components/Layout/Layout.jsx';
import EventLayout from './components/EventLayout/EventLayout.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const LogInPage = lazy(() => import('./pages/LogInPage/LogInPage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/Registrationpage.jsx')
);
const EventFormPage = lazy(() =>
  import('./pages/EventFormPage/EventFormPage.jsx')
);
const EventDetailsPage = lazy(() =>
  import('./pages/EventDetailsPage/EventDetailsPage.jsx')
);
const ViewPage = lazy(() => import('./pages/ViewPage/ViewPage.jsx'));
const PageNotFound = lazy(() =>
  import('./pages/PageNotFound/PageNotFound.jsx')
);

// import Home from './pages/Home/Home.jsx';
// import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
// import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage.jsx';
// import ViewPage from './pages/ViewPage/ViewPage.jsx';
// import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register-user" element={<RegistrationPage />} />

            <Route path="/card" element={<EventLayout />}>
              <Route path=":id" element={<EventDetailsPage />} />
              <Route path="register" element={<EventFormPage />} />
              <Route path="participants" element={<ViewPage />} />
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
// <Route path="details" element={<EventDetailsPage />}>
{
  /* <Route path="/create-event" element={<CreateEventPage />} /> */
}
// import CreateEventPage from './pages/CreateEventPage/CreateEventPage.jsx';
