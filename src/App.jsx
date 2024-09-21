// import './App.css';
import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './components/pages/Home/Home.jsx';
// import AboutEvent from './components/pages/AboutEvent/AboutEvent.jsx';
// import Register from './components/pages/Register/Register.jsx';
// import PageNotFound from './components/pages/PageNotFound/PageNotFound.jsx';
// import CreateEventPage from './components/pages/CreateEventPage/CreateEventPage.jsx';
// import Layout from './components/Layout/Layout.jsx';
// import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

const AboutEvent = lazy(() =>
  import('./components/pages/AboutEvent/AboutEvent.jsx')
);
const Register = lazy(() => import('./components/pages/Register/Register.jsx'));
const PageNotFound = lazy(() =>
  import('./components/pages/PageNotFound/PageNotFound.jsx')
);
const CreateEventPage = lazy(() =>
  import('./components/pages/CreateEventPage/CreateEventPage.jsx')
);

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register/:eventId" element={<Register />} />
            <Route path="/about/:eventId" element={<AboutEvent />} />
            <Route path="/create/:eventId" element={<CreateEventPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Routes>

        <ToastNotification />
      </Layout>
    </>
  );
};

export default App;
