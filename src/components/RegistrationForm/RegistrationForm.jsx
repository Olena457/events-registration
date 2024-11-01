import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './RegistrationForm.module.css';

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';
const BIN_NAME = events;
const RegistrationForm = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    participantId: uuidv4(),
    fullName: '',
    email: '',
    dateOfBirth: '',
    source: 'Social Media',
    idEvent: eventId,
  });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          {
            headers: {
              'X-Master-Key': API_KEY,
            },
          }
        );
        setEvents(response.data.record.events);
      } catch (error) {
        toast.error('Error fetching events.');
      }
    };

    fetchEvents();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const formattedDate = format(
        new Date(formData.dateOfBirth),
        'yyyy-MM-dd'
      ).toString();
      const dataToSend = {
        participant: {
          ...formData,
          dateOfBirth: formattedDate,
        },
      };

      const event = events.find(event => event.idEvent === eventId);
      if (event) {
        event.participants.push(dataToSend.participant);
        const response = await axios.put(
          `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
          { record: { events } },
          {
            headers: {
              'X-Master-Key': API_KEY,
              'X-Bin-Name': BIN_NAME,
              'Content-Type': 'application/json',
            },
          }
        );

        console.log('Registration successful:', response.data);
        toast.success('Registration successful!');
        setFormData({
          participantId: uuidv4(),
          fullName: '',
          email: '',
          dateOfBirth: '',
          source: 'Social Media',
          idEvent: eventId,
        });
      } else {
        toast.error('Event not found.');
      }
    } catch (error) {
      console.error('Error registering:', error);
      toast.error('Error registering: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.registrationForm}>
      <label className={css.label}>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={css.inputField}
          required
        />
      </label>
      <label className={css.label}>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={css.inputField}
          required
        />
      </label>
      <label className={css.label}>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={css.inputField}
          required
        />
      </label>
      <label className={css.label}>
        Where did you hear about this event?
        <div className={css.radioWrapper}>
          <label className={css.radio}>
            Social Media
            <input
              type="radio"
              name="source"
              value="Social Media"
              checked={formData.source === 'Social Media'}
              onChange={handleChange}
              className={css.radioInput}
            />
          </label>

          <label className={css.radio}>
            Friends
            <input
              type="radio"
              name="source"
              value="Friends"
              checked={formData.source === 'Friends'}
              onChange={handleChange}
              className={css.radioInput}
            />
          </label>

          <label className={css.radio}>
            Myself
            <input
              type="radio"
              name="source"
              value="Myself"
              checked={formData.source === 'Myself'}
              onChange={handleChange}
              className={css.radioInput}
            />
          </label>
        </div>
      </label>
      <button type="submit" className={css.submitButton}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
