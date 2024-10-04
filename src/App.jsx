import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import Home from './components/pages/Home/Home.jsx';
import RegisterPage from './components/pages/RegisterPage/RegisterPage.jsx';
import AboutEvent from './components/pages/AboutEvent/AboutEvent.jsx';
import CreateEventPage from './components/pages/CreateEventPage/CreateEventPage.jsx';
import PageNotFound from './components/pages/PageNotFound/PageNotFound.jsx';

const App = () => {
  return (
    <>
      <Layout />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participant" element={<RegisterPage />} />
          {/* <Route path="/event/:eventId" element={<AboutEvent />} /> */}
          <Route
            path="/event/:eventId/participant/:participantId"
            element={<AboutEvent />}
          />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
};

export default App;
