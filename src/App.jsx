import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Layout from './components/Layout/Layout.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

import Home from './pages/Home/Home.jsx';
import CreateEventPage from './pages/CreateEventPage/CreateEventPage.jsx';
// import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
import EventsPage from './pages/EventsPage/EventsPage.jsx';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage.jsx';
import ViewPage from './pages/ViewPage/ViewPage.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx';

const App = () => {
  return (
    <>
      <Layout />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/:idEvent" element={<EventDetailsPage />}>
            <Route path="register" element={<RegistrationForm />} />
            <Route path="participants" element={<ViewPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
};

export default App;
