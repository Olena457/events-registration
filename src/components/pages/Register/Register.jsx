import React, { useState } from 'react';
import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';
import { Container } from '../../Container/container.jsx';
import { Section } from '../../Section/Section.jsx';
import css from './Register.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
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
  const handleSubmit = (eventId, userId) => {
    axios
      .patch(`https://mockapi.io/api/v1/events/${eventId}`, {
        registeredUsers: [...currentRegisteredUsers, userId],
      })
      .then(response => {
        console.log('User registered:', response.data);
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <>
      <Section>
        <Container>
          <h2 className={css.title}>Registration Page</h2>
          <RegistrationForm
            handleSubmit={handleSubmit}
            formData={formData}
            handleChange={handleChange}
          />
          <Link to="/" className={css.btnRegister}>
            Home
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default Register;

// const handleSubmit = () => {
//   fetch(, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log('User registered:', data);
//     })
//     .catch(error => {
//       console.error('Error registering user:', error);
//     });
// };
