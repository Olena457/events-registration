import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/createCard/operationsCreateCard.js';
import styles from './CreateCard.module.css';
import defaultAvatar from '../../assets/icons/user.svg';
import {
  selectIsLoggedIn,
  selectUserId,
} from '../../redux/auth/selectorsAuth.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatISO } from 'date-fns';

const CreateCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [organizer, setOrganizer] = useState('');

  const handleDescriptionChange = e => {
    if (e.target.value.length <= 100) {
      setDescription(e.target.value);
    }
  };

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

    const dateTime = new Date(`${eventDate}T${eventTime}`);
    const currentDate = new Date();

    if (dateTime < currentDate) {
      toast.error('The event date has passed. Please choose another date.', {
        position: 'top-center',
      });
      return;
    }

    try {
      const formattedDateTime = formatISO(dateTime);

      await dispatch(
        addCard({
          title,
          description,
          date: formattedDateTime,
          organizer: {
            full_name: organizer,
            avatar_url: defaultAvatar,
            userId,
          },
          participants: [],
        })
      ).unwrap();
      setTitle('');
      setDescription('');
      setEventDate('');
      setEventTime('');
      setOrganizer('');
      toast.success('Event created successfully!', {
        position: 'top-center',
      });
      navigate('/');
    } catch (error) {
      toast.error('Error creating event. Please try again later.', {
        position: 'top-center',
      });
      console.error('Error creating event:', error);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Create Event</h2>
      <p className={styles.message}>Are you logged in yet?</p>
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
          onChange={handleDescriptionChange}
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
          min={getCurrentDate()}
        />
      </label>
      <label className={styles.label}>
        Event Time:
        <input
          type="time"
          value={eventTime}
          onChange={e => setEventTime(e.target.value)}
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
