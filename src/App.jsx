import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Layout from './components/Layout/Layout.jsx';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';
import Home from './pages/Home/Home.jsx';
import AboutEvent from './pages/AboutEvent/AboutEvent.jsx';
import CreateEventPage from './pages/CreateEventPage/CreateEventPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';
const App = () => {
  return (
    <>
      <Layout />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/events/:id" element={<EventsPages />}>
            <Route path="participants" element={<AboutEvent />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
};

export default App;
