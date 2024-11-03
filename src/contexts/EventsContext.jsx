import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';
const ACCESS_KEY_GET = `$2a$10$gTYy/AwiYnRyarOfEWwMjOr6oPAXTi5Pd5Mrg/uFvCXLlKymYd7oa`;
export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Access-Key': ACCESS_KEY_GET,
            },
          }
        );
        setEvents(response.data.record.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventsContext.Provider value={events}>{children}</EventsContext.Provider>
  );
};
