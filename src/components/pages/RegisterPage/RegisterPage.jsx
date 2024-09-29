import { useState } from 'react';
import RegistrationForm from '../../RegistrationForm/RegistrationForm.jsx';

import css from './RegisterPage.module.css';
import ContainerWrapper from '../../ContainerWrapper/ContainerWrapper.jsx';

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
      <ContainerWrapper>
        <h4 className={css.title}>Registration Page</h4>
        <RegistrationForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </ContainerWrapper>
    </>
  );
};

export default RegisterPage;
