import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList.jsx';
import Loading from '../../Loading/Loading.jsx';
import Container from '../../Container/container.jsx';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/events');
        setEvents(response.data.data);
        setLoading(false);
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
      <Container>
        <h5 className={css.title}>Welcome to the event board!</h5>
        {loading ? (
          <Loading />
        ) : (
          <CardEventList events={events} handleRegister={handleRegister} />
        )}
      </Container>
    </>
  );
};

export default Home;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import css from './Home.module.css';
// import CardEventList from '../../CardEventList/CardEventList.jsx';
// import Loading from '../../Loading/Loading.jsx';
// import Container from '../../Container/container.jsx';

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
//       <Container>
//         <h5 className={css.title}>Welcome to the event board!</h5>
//         {loading ? (
//           <Loading />
//         ) : (
//           <CardEventList events={events} handleRegister={handleRegister} />
//         )}
//       </Container>
//     </>
//   );
// };

// export default Home;
