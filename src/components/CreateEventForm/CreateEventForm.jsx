import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './CreateEventForm.module.css';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    type: 'Event',
    title: '',
    description: '',
    date: '',
    organizer: '',
    idEvent: uuidv4(),
  });

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
      console.log('Data to send:', dataToSend);

      const response = await axios.post(
        'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b',
        dataToSend
      );

      console.log('Event created successfully:', response.data);
      toast.success('Registration successful!');

      setFormData({
        type: 'Event',
        title: '',
        description: '',
        date: '',
        organizer: '',
        idEvent: uuidv4(),
      });
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Error registering: ' + error.message);
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={css.textarea}
          rows="2"
          maxLength="200"
          placeholder="Max length 200"
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
          name="organizer"
          value={formData.organizerFullName}
          onChange={handleChange}
          className={css.input}
          placeholder="Full name"
        />
      </label>
      <button type="submit" className={css.registerBtn}>
        Create Event
      </button>
    </form>
  );
};

export default CreateEventForm;
