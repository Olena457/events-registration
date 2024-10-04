// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import css from './Home.module.css';
// import CardEventList from '../../CardEventList/CardEventList.jsx';
// import Loading from '../../Loading/Loading.jsx';

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
//         );
//         const eventsData = response.data;

//         if (Array.isArray(eventsData) && eventsData.length > 0) {
//           const formattedEvents = eventsData.map(event => ({
//             idEvent: event.idEvent || 'No Id',
//             title: event.title || 'No Title',
//             description: event.description || 'No Description',
//             date: event.date || 'No Date',
//             organizer: event.organizer || 'No Organizer',
//           }));
//           setEvents(formattedEvents);
//           setLoading(false);
//         }
//       } catch (error) {
//         toast.error('Error fetching events: ' + error.message);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = eventId => {
//     console.log(`Registering for event with ID: ${eventId}`);
//     toast.success(`Successfully registered for event with ID: ${eventId}`);
//   };

//   return (
//     <>
//       <h4 className={css.title}>Welcome to the event board!</h4>

//       {loading ? (
//         <Loading />
//       ) : (
//         <div className={css.wrapperCard}>
//           <CardEventList events={events} handleRegister={handleRegister} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;
//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import css from './Home.module.css';
// import CardEventList from '../../CardEventList/CardEventList.jsx';
// import Loading from '../../Loading/Loading.jsx';

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
//         );
//         const eventsData = response.data;

//         if (Array.isArray(eventsData) && eventsData.length > 0) {
//           const formattedEvents = eventsData.map(event => ({
//             idEvent: event.idEvent,
//             title: event.title,
//             description: event.description,
//             date: event.date,
//             organizer: event.organizer,
//           }));
//           setEvents(formattedEvents);
//         } else {
//           setEvents([]);
//         }
//         setLoading(false);
//       } catch (error) {
//         toast.error('Error fetching events: ' + error.message);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleRegister = eventId => {
//     console.log(`Registering for event with ID: ${eventId}`);
//     toast.success(`Successfully registered for event with ID: ${eventId}`);
//   };

//   return (
//     <>
//       <h4 className={css.title}>Welcome to the event board!</h4>

//       {loading ? (
//         <Loading />
//       ) : events.length > 0 ? (
//         <div className={css.wrapperCard}>
//           <CardEventList events={events} handleRegister={handleRegister} />
//         </div>
//       ) : (
//         <div className={css.noEvents}>
//           <h1>Events not found</h1>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="64"
//             height="64"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="feather feather-calendar"
//           >
//             <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//             <line x1="16" y1="2" x2="16" y2="6"></line>
//             <line x1="8" y1="2" x2="8" y2="6"></line>
//             <line x1="3" y1="10" x2="21" y2="10"></line>
//           </svg>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;
// _____________________________________________________________________________________

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import Loading from '../../Loading/Loading.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b'
        );
        const eventsData = response.data;

        if (Array.isArray(eventsData) && eventsData.length > 0) {
          const formattedEvents = eventsData.map(event => ({
            idEvent: event.idEvent,
            title: event.title,
            description: event.description,
            dateEvent: event.dateEvent,
            organizer: event.organizer,
          }));
          setEvents(formattedEvents);
        } else {
          setEvents([]);
        }
        setLoading(false);
      } catch (error) {
        toast.error('Error fetching events: ' + error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = eventId => {
    console.log(`Registering for event with ID: ${eventId}`);
    toast.success(`Successfully registered for event with ID: ${eventId}`);
  };

  return (
    <>
      <h4 className={css.title}>Welcome to the event board!</h4>

      {loading ? (
        <Loading />
      ) : events.length > 0 ? (
        <div className={css.wrapperCard}>
          <CardEventList events={events} handleRegister={handleRegister} />
        </div>
      ) : (
        <div className={css.wrapperNoEvent}>
          <h4 className={css.titleNo}>No events found</h4>
          <p className={css.message}>
            "Hello user! Create your event now!
            <br />
            Click below to add a new card."
          </p>
          <Link to="/create-event" className={css.btn}>
            Create
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
