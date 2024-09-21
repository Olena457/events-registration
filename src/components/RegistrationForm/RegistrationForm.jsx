import { Container } from '../Container/container.jsx';
import { Section } from '../Section/Section.jsx';
import css from './RegistrationForm.module.css';

const RegistrationForm = ({ handleSubmit, formData, handleChange }) => {
  const onSubmit = event => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <Section>
        <Container>
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
            <label className={css.label}>
              Where did you hear about this event?
              <select
                name="eventSource"
                value={formData.eventSource}
                onChange={handleChange}
                className={css.selectField}
              >
                <option value="socialMedia">Social Media</option>
                <option value="friends">Friends</option>
                <option value="self">Found Myself</option>
              </select>
            </label>
            <button type="submit" className={css.submitButton}>
              Register
            </button>
          </form>
        </Container>
      </Section>
    </>
  );
};

export default RegistrationForm;
