import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import css from './CreateEventForm.module.css';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    descriptionEvent: '',
    date: '',
    organizerFullName: '',
    idEvent: uuidv4(),
    type: 'Card',
  });
  // const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'description' && value.split('\n').length > 2) {
      return;
    }
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
        // 'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b',
        dataToSend
      );

      // if (response.status !== 201) {
      //   throw new Error('Failed to create event');
      // }

      // setMessage('Event created successfully!');
      console.log('Event created successfully:', response.data);
      setFormData({
        title: '',
        descriptionEvent: '',
        date: '',
        organizerFullName: '',
        idEvent: uuidv4(),
        type: 'Card',
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
        />
      </label>
      <label className={css.label}>
        Description:
        <textarea
          name="descriptionEvent"
          value={formData.descriptionEvent}
          onChange={handleChange}
          className={css.textarea}
          rows="2" // Обмеження кількості рядків
          maxLength="200" // Обмеження кількості символів
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
        />
      </label>
      <label className={css.label}>
        organizer:
        <input
          type="text"
          name="organizerFullName"
          value={formData.organizerFullName}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <button type="submit" className={css.registerBtn}>
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
