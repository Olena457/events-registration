import React, { useState } from 'react';
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

  const handleSubmit = e => {
    e.preventDefault();
    // Тут можна додати логіку для відправки даних на сервер або інші дії
    console.log('Form submitted:', formData);
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
