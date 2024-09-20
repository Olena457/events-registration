import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ParticipantList from '../../ParticipantList/ParticipantList.jsx';
import { parseDate } from '../../utils/dateUtils.js';

const SPREADSHEET_ID = '16V0Yg-Vz9LcqHBcrUjGEx_lfA38l4c3X4zq4t0VikDE';
const API_KEY = 'AIzaSyBGLpJ8vDTlkxn2dS7quFPn7qpiVdn3Rsg';

const AboutEvent = () => {
  const { eventId } = useParams();
  const [participants, setParticipants] = useState([]);
  const [loadingParticipants, setLoadingParticipants] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/EventSheet1?key=${API_KEY}`
        );
        const rows = response.data.values;
        if (rows && rows.length > 1) {
          const formattedParticipants = rows.slice(1).map((row, index) => ({
            name: row[5], // Participant Full Name
            email: row[6], // Participant Email
            dob: parseDate(row[7]), // Парсинг дати народження
            referral: row[8], // Referral
          }));
          setParticipants(formattedParticipants);
        } else {
          setParticipants([]);
        }
      } catch (error) {
        setError(error.message);
        toast.error(`Error fetching participants: ${error.message}`);
      } finally {
        setLoadingParticipants(false);
      }
    };
    fetchParticipants();
  }, [eventId]);

  return (
    <div>
      <h1>Participants for Event {eventId}</h1>
      <ParticipantList
        participants={participants}
        loading={loadingParticipants}
        error={error}
      />
    </div>
  );
};

export default AboutEvent;
