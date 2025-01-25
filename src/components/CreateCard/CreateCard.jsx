import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/createCard/operationsCreateCard.js';
import styles from './CreateCard.module.css';
import defaultAvatar from '../../assets/icons/user.svg';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [organizer, setOrganizer] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.info(
        'Please register in the application first to create an event!',
        {
          position: 'top-center',
        }
      );
      navigate('/register-user');
      return;
    }

    try {
      await dispatch(
        addCard({
          title,
          description,
          event_date: eventDate,
          organizer: {
            full_name: organizer,
            avatar_url: defaultAvatar, // Використовуйте дефолтний аватар
          },
          participants: [],
        })
      );
      setTitle('');
      setDescription('');
      setEventDate('');
      setOrganizer('');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Description:
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className={styles.textarea}
        />
      </label>
      <label className={styles.label}>
        Event Date:
        <input
          type="date"
          value={eventDate}
          onChange={e => setEventDate(e.target.value)}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Organizer:
        <input
          type="text"
          value={organizer}
          onChange={e => setOrganizer(e.target.value)}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.registerBtn}>
        Create Event
      </button>
    </form>
  );
};

export default CreateCard;
