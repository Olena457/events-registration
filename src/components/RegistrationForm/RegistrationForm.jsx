import { useState } from 'react';
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

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className={css.registrationForm}>
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
        <button type="submit" className={css.submitButton}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;

{
  /* const RegistrationForm = ({ handleSubmit, formData, handleChange }) => { */
}
//   const onSubmit = event => {
//     event.preventDefault();
//     handleSubmit();
//   };

//   return (
//     <>
//       <Section>
//         <Container>
//           <form onSubmit={onSubmit} className={css.registrationForm}>
//             <label className={css.label}>
//               Full Name:
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className={css.inputField}
//               />
//             </label>
//             <label className={css.label}>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={css.inputField}
//               />
//             </label>
//             <label className={css.label}>
//               Date of Birth:
//               <input
//                 type="date"
//                 name="dateOfBirth"
//                 value={formData.dateOfBirth}
//                 onChange={handleChange}
//                 className={css.inputField}
//               />
//             </label>
//             <label className={css.label}>
//               Where did you hear about this event?
//               <select
//                 name="eventSource"
//                 value={formData.eventSource}
//                 onChange={handleChange}
//                 className={css.selectField}
//               >
//                 <option value="socialMedia">Social Media</option>
//                 <option value="friends">Friends</option>
//                 <option value="self">Found Myself</option>
//               </select>
//             </label>
//             <button type="submit" className={css.submitButton}>
//               Register
//             </button>
//           </form>
//         </Container>
//       </Section>
//     </>
//   );
// };

// export default RegistrationForm;
