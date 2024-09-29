import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './RegistrationForm.module.css';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    type: 'User',
    fullName: '',
    email: '',
    dateOfBirth: '',
    source: 'Social Media',
    Id: uuidv4(),
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formattedDate = format(
        new Date(formData.dateOfBirth),
        'yyyy-MM-dd'
      );
      const dataToSend = { ...formData, dateOfBirth: formattedDate };

      console.log('Data to send:', dataToSend);

      const response = await axios.post(
        'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b',
        dataToSend
      );
      console.log('Registration successful:', response.data);
      toast.success('Registration successful!');

      setFormData({
        type: 'User',
        fullName: '',
        email: '',
        dateOfBirth: '',
        source: 'Social Media',
        Id: uuidv4(),
      });
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
