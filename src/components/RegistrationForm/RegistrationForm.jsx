// import React, { useState } from 'react';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     type: 'User',
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     Id: uuidv4(),
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const dataToSend = { ...formData, dateOfBirth: formattedDate };

//       console.log('Data to send:', dataToSend);

//       const response = await axios.post(
//         'https://sheet.best/api/sheets/6a64ce6b-9f5b-4c04-8f8c-fdb7e8011a9b',
//         dataToSend
//       );
//       console.log('Registration successful:', response.data);
//       toast.success('Registration successful!');

//       setFormData({
//         type: 'User',
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         Id: uuidv4(),
//       });
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>

//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>

//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
// ________________________________________________________________________________________________
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    source: 'Social Media',
    participantId: uuidv4(),
    idEvent: eventId,
    type: 'participant',
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

    if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      const formattedDate = format(
        new Date(formData.dateOfBirth),
        'yyyy-MM-dd'
      ).toString();
      const dataToSend = {
        participant: {
          // включаємо у властивість participant
          ...formData,
          dateOfBirth: formattedDate,
          participants: formData.participantId,
          eventId: formData.idEvent,
        },
      };
      console.log('Data to send:', dataToSend);

      const response = await axios.put(dataToSend);
      console.log('Registration successful:', response.data);
      toast.success('Registration successful!');

      setFormData({
        fullName: '',
        email: '',
        dateOfBirth: '',
        source: 'Social Media',
        participantId: uuidv4(),
        idEvent: eventId,
        type: 'participant',
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
// __________________________________________________
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';

// const RegistrationForm = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     participantId: uuidv4(),
//     idEvent: eventId,
//     // type: 'participant',
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form submitted');

//     if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     if (!formData.idEvent || !formData.participantId) {
//       toast.error('Missing necessary IDs');
//     }
//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const dataToSend = {
//         participant: {
//           // включаємо у властивість participant
//           ...formData,
//           dateOfBirth: formattedDate,
//           //  participantId: formData.participantId,
//           eventId: formData.idEvent,
//         },
//       };
//       console.log('Data to send:', dataToSend);

//       const response = await axios.put(
//         'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/`${eventId}`',
//         // 'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/participants', // Включаємо назву аркуша у URL
//         dataToSend // Формат даних для Sheety
//       );
//       console.log('Registration successful:', response.data);
//       toast.success('Registration successful!');
//       setFormData({
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         participantId: uuidv4(),
//         registrationId: eventId,
//         type: 'participant',
//       });
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';

// const RegistrationForm = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     participantId: uuidv4(),
//     idEvent: eventId,
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     if (!formData.idEvent || !formData.participantId) {
//       toast.error('Missing necessary IDs.');
//       return;
//     }

//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const participantData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         dateOfBirth: formattedDate,
//         source: formData.source,
//         participantId: formData.participantId,
//         idEvent: formData.idEvent,
//       };

//       const response = await axios.put(
//         'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/`${eventId}`', // Динамічний URL
//         { event: { participants: [participantData] } } // Формат даних для Sheety
//       );
//       console.log('Registration successful:', response.data);
//       toast.success('Registration successful!');
//       setFormData({
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         participantId: uuidv4(),
//         idEvent: eventId,
//       });
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';

// const RegistrationForm = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     participantId: uuidv4(),
//     idEvent: eventId,
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form submitted'); // Додаємо лог, щоб переконатися, що форма надсилається

//     if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     if (!formData.idEvent || !formData.participantId) {
//       toast.error('Missing necessary IDs.');
//       return;
//     }

//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const participantData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         dateOfBirth: formattedDate,
//         source: formData.source,
//         participantId: formData.participantId,
//         idEvent: formData.idEvent,
//       };

//       // Отримуємо подію для оновлення
//       const eventResponse = await axios.get(
//         `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/${eventId}`
//       );

//       const eventData = eventResponse.data.event;
//       const participants = eventData.participants || [];
//       participants.push(participantData);

//       // Оновлюємо подію з новими учасниками
//       const updateResponse = await axios.put(
//         `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/${eventId}`,
//         { event: { participants } }
//       );

//       console.log('Registration successful:', updateResponse.data);
//       toast.success('Registration successful!');
//       setFormData({
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         // participantId: uuidv4(),
//         idEvent: eventId,
//       });
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';

// const RegistrationForm = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     participantId: uuidv4(),
//     idEvent: eventId,
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form submitted');
//     if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const participantData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         dateOfBirth: formattedDate,
//         source: formData.source,
//         participantId: formData.participantId,
//         idEvent: formData.idEvent,
//       };

//       // Отримуємо список учасників події
//       const eventResponse = await axios.get(
//         `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/${eventId}`
//       );

//       const eventData = eventResponse.data.event;
//       const participants = eventData.participants
//         ? JSON.parse(eventData.participants)
//         : [];

//       participants.push(participantData);
//       // const updatedParticipants = participants.join(', ');

//       // Оновлюємо подію з новими учасниками
//       const updateResponse = await axios.put(
//         `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/${eventId}`,
//         { event: { participants: JSON.stringify(participants) } }
//       );

//       console.log('Registration successful:', updateResponse.data);
//       toast.success('Registration successful!');
//       setFormData({
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         participantId: uuidv4(),
//         idEvent: eventId,
//       });
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
// останній код____________________________________________
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { format } from 'date-fns';
// import { toast } from 'react-hot-toast';
// import { v4 as uuidv4 } from 'uuid';
// import css from './RegistrationForm.module.css';

// const RegistrationForm = () => {
//   const { eventId } = useParams();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dateOfBirth: '',
//     source: 'Social Media',
//     participantId: uuidv4(),
//     idEvent: eventId,
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form submitted');
//     if (!formData.fullName || !formData.email || !formData.dateOfBirth) {
//       toast.error('Please fill in all fields.');
//       return;
//     }

//     try {
//       const formattedDate = format(
//         new Date(formData.dateOfBirth),
//         'yyyy-MM-dd'
//       );
//       const participantData = {
//         fullName: formData.fullName,
//         email: formData.email,
//         dateOfBirth: formattedDate,
//         source: formData.source,
//         participantId: formData.participantId,
//         idEvent: formData.idEvent,
//       };

//       // Отримуємо всі події та фільтруємо потрібну подію
//       const eventsResponse = await axios.get(
//         'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events'
//       );
//       const event = eventsResponse.data.events.find(
//         event => event.idEvent === eventId
//       );

//       if (!event) {
//         toast.error('Event not found');
//         return;
//       }

//       const participants = event.participants
//         ? JSON.parse(event.participants)
//         : [];
//       participants.push(participantData.participantId);

//       // Оновлюємо подію з новими учасниками
//       const updateResponse = await axios.put(
//         `https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/events/${eventId}`,
//         { event: { participants: JSON.stringify(participants) } }
//       );

//       console.log('Registration successful:', updateResponse.data);
//       toast.success('Registration successful!');
//       setFormData({
//         fullName: '',
//         email: '',
//         dateOfBirth: '',
//         source: 'Social Media',
//         participantId: uuidv4(),
//         idEvent: eventId,
//       });

//       // Додатково зберігаємо інформацію про учасника
//       await axios.post(
//         'https://api.sheety.co/a495f86796cd08ee8b02d7c38d704926/events/participants',
//         { participant: participantData }
//       );
//     } catch (error) {
//       console.error('Error registering:', error);
//       toast.error('Error registering: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.registrationForm}>
//       <label className={css.label}>
//         Full Name:
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Date of Birth:
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className={css.inputField}
//           required
//         />
//       </label>
//       <label className={css.label}>
//         Where did you hear about this event?
//         <div className={css.radioWrapper}>
//           <label className={css.radio}>
//             Social Media
//             <input
//               type="radio"
//               name="source"
//               value="Social Media"
//               checked={formData.source === 'Social Media'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Friends
//             <input
//               type="radio"
//               name="source"
//               value="Friends"
//               checked={formData.source === 'Friends'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//           <label className={css.radio}>
//             Myself
//             <input
//               type="radio"
//               name="source"
//               value="Myself"
//               checked={formData.source === 'Myself'}
//               onChange={handleChange}
//               className={css.radioInput}
//             />
//           </label>
//         </div>
//       </label>
//       <button type="submit" className={css.submitButton}>
//         Register
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;
