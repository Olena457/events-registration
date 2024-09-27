import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    eventSource: 'socialMedia',
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
      const formattedDate = format(
        new Date(formData.dateOfBirth),
        'yyyy-MM-dd'
      );
      const dataToSend = { ...formData, dateOfBirth: formattedDate };

      const response = await axios.post(
        ' https://dummyapi.io/data/v1/user?created=1',
        dataToSend
      );
      console.log('Registration successful:', response.data);

      setFormData({
        fullName: '',
        email: '',
        dateOfBirth: '',
        eventSource: 'socialMedia',
      });
    } catch (error) {
      console.error('Error registering:', error);
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
      <div className={css.radioWrapper}>
        <fieldset className={css.fieldset}>
          <legend>Where did you hear about this event?</legend>
          <label className={css.label}>
            <input
              type="radio"
              name="eventSource"
              value="socialMedia"
              checked={formData.eventSource === 'socialMedia'}
              onChange={handleChange}
              className={css.radioField}
            />
            Social Media
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="eventSource"
              value="friends"
              checked={formData.eventSource === 'friends'}
              onChange={handleChange}
              className={css.radioField}
            />
            Friends
          </label>
          <label className={css.label}>
            <input
              type="radio"
              name="eventSource"
              value="self"
              checked={formData.eventSource === 'self'}
              onChange={handleChange}
              className={css.radioField}
            />
            Found Myself
          </label>
        </fieldset>
      </div>
      <button type="submit" className={css.submitButton}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
