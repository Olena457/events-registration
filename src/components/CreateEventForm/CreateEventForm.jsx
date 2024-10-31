import { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './CreateEventForm.module.css';

const API_KEY = '$2a$10$G0xTCqlf0n.eU/u68dEKs.14a0dwsMLKMICywBgC6rUGwz/Jk5vFe';
const MY_BIN_ID = '67235bc6e41b4d34e44bd6ab';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    organizer: '',
    participants: [],
  });

  // const formatDate = dateStr => {
  //   const [day, month, year] = dateStr.split('.');
  //   return `${year}-${month}-${day}`;
  // };
  // name === 'event_date' ? formatDate(value) :

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
        idEvent: uuidv4(),
        event_date: formattedDate,
      };
      console.log('Data to send:', eventData);

      const response = await axios.post(
        `https://api.jsonbin.io/v3/b/${MY_BIN_ID}`,

        { record: eventData },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
        }
      );
      console.log('Event created:', response.data);

      toast.success('Event created successfully!');
      setFormData({
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
