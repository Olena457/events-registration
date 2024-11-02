import { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './CreateEventForm.module.css';

const ACCESS_KEY = `$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5G`;
const MY_BIN_ID = '6724e2e9e41b4d34e44c73cd';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    idEvent: uuidv4(),
    title: '',
    description: '',
    organizer: '',
    event_date: '',
    participants: [],
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formattedDate = format(new Date(formData.event_date), 'yyyy-MM-dd');
      const eventData = {
        ...formData,
        event_date: formattedDate,
        participants: Array.isArray(formData.participants)
          ? formData.participants
          : [],
      };
      console.log('Data to send:', eventData);

      const response = await axios.post(
        `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,
        { record: eventData },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': ACCESS_KEY,
          },
        }
      );
      console.log('Event created:', response.data);

      toast.success('Event created successfully!');
      setFormData({
        idEvent: uuidv4(),
        title: '',
        description: '',
        event_date: '',
        organizer: '',
        participants: [],
      });
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Error creating event: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <label className={css.label}>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={css.input}
          required
        />
      </label>
      <label className={css.label}>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={css.textarea}
          rows="2"
          maxLength="200"
          placeholder="Max length 200"
          required
        />
      </label>
      <label className={css.label}>
        Date:
        <input
          type="date"
          name="event_date"
          value={formData.event_date}
          onChange={handleChange}
          className={css.input}
          required
        />
      </label>
      <label className={css.label}>
        Organizer:
        <input
          type="text"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          className={css.input}
          placeholder="Organization name"
          required
        />
      </label>
      <button type="submit" className={css.registerBtn}>
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
