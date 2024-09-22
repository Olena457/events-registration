import Container from '../../Container/container.jsx';
import CreateEventForm from '../../CreateEventForm/CreateEventForm.jsx';
import css from './CreateEventPage.module.css';
const CreateEventPage = () => {
  return (
    <>
      <Container>
        <h2 className={css.title}>Create a New Event!</h2>
        <CreateEventForm />
      </Container>
    </>
  );
};

export default CreateEventPage;
