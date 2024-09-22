import Layout from './components/Layout/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

const Home = lazy(() => import('./components/pages/Home/Home.jsx'));
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage.jsx')
);
const AboutEvent = lazy(() =>
  import('./components/pages/AboutEvent/AboutEvent.jsx')
);
const CreateEventPage = lazy(() =>
  import('./components/pages/CreateEventPage/CreateEventPage.jsx')
);
const PageNotFound = lazy(() =>
  import('./components/pages/PageNotFound/PageNotFound.jsx')
);

const App = () => {
  return (
    <>
      <Layout />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<RegisterPage />} />
          <Route path="/event/:eventId" element={<AboutEvent />} />
          <Route path="/events" element={<CreateEventPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
};

export default App;
