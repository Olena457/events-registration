import { useState } from 'react';
import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';
import Container from '../../Container/container.jsx';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
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
      .post({
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
      <Container>
        <h3 className={css.title}>Registration Page</h3>
        <RegistrationForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </Container>
    </>
  );
};

export default RegisterPage;
