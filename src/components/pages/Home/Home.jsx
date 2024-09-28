import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import Loading from '../../Loading/Loading.jsx';
import ContainerWrapper from '../../ContainerWrapper/ContainerWrapper.jsx';

{
  /* ============================ */
}
{
  /* const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const SHEET_NAME = 'EventSheet1';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const CardEventList = () => {
  const [events, setEvents] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );

        const rows = response.data.values;

        if (Array.isArray(rows)) {
          if (rows.length > 1) {
            const formattedEvents = rows.slice(1).map(row => ({
              id: row[0] || 'No Id',
              title: row[1] || 'No Title',
              description: row[2] || 'No Description',
              date: row[3] || 'No Date',
              organizer: row[4] || 'No Organizer',
            }));

            setEvents(formattedEvents);
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setTimeout(fetchEvents, 1000);
        }
      }
    };

    fetchEvents();
  }, []); */
}
{
  /* ============================ */
}
const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios
          .get
          // 'https://docs.google.com/spreadsheets/d/1mIvJyfDOlJ5M1DDygqsdN89M6dLNbidJ2khJK-dokHE/edit?usp=sharing'
          ();
        const rows = response.data.values;

        if (Array.isArray(rows)) {
          if (rows.length > 1) {
            const formattedEvents = rows.slice(1).map(row => ({
              id: row[0] || 'No Id',
              title: row[1] || 'No Title',
              description: row[2] || 'No Description',
              date: row[3] || 'No Date',
              organizer: row[4] || 'No Organizer',
            }));
            setEvents(response.data.data);
            setEvents(formattedEvents);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = eventId => {
    console.log(`Registering for event with ID: ${eventId}`);
  };

  return (
    <>
      <ContainerWrapper>
        <h4 className={css.title}>Welcome to the event board!</h4>
        {loading ? (
          <Loading />
        ) : (
          <CardEventList events={events} handleRegister={handleRegister} />
        )}
      </ContainerWrapper>
    </>
  );
};

export default Home;

// ________________________________________________________________________
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import css from './Home.module.css';
// import CardEventList from '../../CardEventList/CardEventList.jsx';
// import Loading from '../../Loading/Loading.jsx';
// import ContainerWrapper from '../../ContainerWrapper/ContainerWrapper.jsx';
// import ContainerWrapper from './../../ContainerWrapper/ContainerWrapper';

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const apiKey = process.env.REACT_APP_API_KEY;
//   const sheetId = '1mIvJyfDOlJ5M1DDygqsdN89M6dLNbidJ2khJK-dokHE';
//   const range = 'Sheet1!A1:D10';

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response =
//           await axios.get`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`();
//         setEvents(response.data.values);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [apiKey, sheetId, range]);

//   const handleRegister = eventId => {
//     console.log(`Registering for event with ID: ${eventId}`);
//   };

//   return (
//     <>
//       <ContainerWrapper>
//         <h5 className={css.title}>Welcome to the event board!</h5>
//         {loading ? (
//           <Loading />
//         ) : (
//           <CardEventList events={events} handleRegister={handleRegister} />
//         )}
//       </ContainerWrapper>
//     </>
//   );
// };

// export default Home;
