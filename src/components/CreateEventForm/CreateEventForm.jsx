import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import css from './CreateEventForm.module.css';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    organizer: '',
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
      const formattedDate = format(new Date(formData.date), 'yyyy-MM-dd');
      const dataToSend = { ...formData, date: formattedDate };

      const response = await axios.post(
        'https://reqres.in/api/events',
        dataToSend
      );
      console.log('Event created:', response.data);

      setFormData({
        title: '',
        description: '',
        date: '',
        organizer: '',
      });
    } catch (error) {
      console.error('Error creating event:', error);
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
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={css.input}
          required
        />
      </label>
      <label className={css.label}>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
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
