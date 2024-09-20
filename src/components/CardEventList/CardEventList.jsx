import { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CardEventlist.module.css';
import EventCard from './../EventCard/EventCard.jsx';

const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const SHEET_NAME = 'EventSheet1';

const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const CardEventList = ({ event, participants }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        const rows = response.data.values;
        const formattedEvents = rows.slice(1).map(row => ({
          id: row[0], // Event ID
          title: row[1], // Event Title
          description: row[2], // Event Description
          date: row[3], // Event Date
          organizer: row[4], // Organizer
          participants: participants.filter(p => p.eventId === row[0]), // Фільтрація учасників за подією
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [participants]);

  const handleRegister = id => {
    console.log(`Registering for event ID: ${id}`);
  };

  const handleView = id => {
    console.log(`Viewing participants for event ID: ${id}`);
  };

  return (
    <div className={css.cardContainer}>
      {events.map(event => (
        <EventCard
          key={event.id}
          title={event.title}
          description={event.description}
          id={event.id}
          onRegister={handleRegister}
          onView={handleView}
          participants={event.participants} // Передача учасників до CardComponent
          className={css.eventCard} // Додавання класу для стилізації
        />
      ))}
    </div>
  );
};

export default EventCard;
