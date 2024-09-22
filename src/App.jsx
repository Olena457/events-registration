import Layout from './components/Layout/Layout.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ToastNotification from './components/ToastNotification/ToastNotification.jsx';

const Home = lazy(() => import('./components/pages/Home/Home.jsx'));
const Register = lazy(() => import('./components/pages/Register/Register.jsx'));
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
          <Route path="/register/:eventId" element={<Register />} />
          <Route path="/event/:eventId" element={<AboutEvent />} />
          <Route path="/create/:eventId" element={<CreateEventPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ToastNotification />
    </>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       <Layout/>
//         <Routes>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/register/:eventId" element={<Register />} />
//             <Route path="/about/:eventId" element={<AboutEvent />} />
//             <Route path="/create/:eventId" element={<CreateEventPage />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </Routes>
//         <ToastNotification />
//
//     </>
//   );
// };

// export default App;
