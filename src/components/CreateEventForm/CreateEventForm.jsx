// import { useState } from 'react';
// import { format } from 'date-fns';
// import { v4 as uuidv4 } from 'uuid';
// import css from './CreateEventForm.module.css';

// const CreateEventForm = () => {
//   const [formData, setFormData] = useState({
//     idEvent: uuidv4(),
//     title: '',
//     description: '',
//     organizer: '',
//     event_date: '',
//     participants: [],
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const formattedDate = format(new Date(formData.event_date), 'yyyy-MM-dd');
//       const eventData = {
//         ...formData,
//         event_date: formattedDate,
//         participants: Array.isArray(formData.participants)
//           ? formData.participants
//           : [],
//       };
//       console.log('Data to send:', eventData);

//       console.log('Event created:', response.data);

//       setFormData({
//         idEvent: uuidv4(),
//         title: '',
//         description: '',
//         event_date: '',
//         organizer: '',
//         participants: [],
//       });
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.formContainer}>
//       <label className={css.label}>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           className={css.input}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Description:
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className={css.textarea}
//           rows="2"
//           maxLength="200"
//           placeholder="Max length 200"
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date:
//         <input
//           type="date"
//           name="event_date"
//           value={formData.event_date}
//           onChange={handleChange}
//           className={css.input}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Organizer:
//         <input
//           type="text"
//           name="organizer"
//           value={formData.organizer}
//           onChange={handleChange}
//           className={css.input}
//           placeholder="Organization name"
//           required
//         />
//       </label>
//       <button type="submit" className={css.registerBtn}>
//         Create Event
//       </button>
//     </form>
//   );
// };

// export default CreateEventForm;
