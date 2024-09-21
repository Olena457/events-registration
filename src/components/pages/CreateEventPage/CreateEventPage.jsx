import CreateEventForm from '../../CreateEventForm/CreateEventForm.jsx';
import css from './CreateEventPage.module.css';
import { Link } from 'react-router-dom';
const CreateEventPage = () => {
  return (
    <>
      <Section>
        <Container>
          <h2 className={css.title}>Create a New Event!</h2>
          <CreateEventForm />
          <>
            <Link to="/" className={css.btnHome}>
              Home
            </Link>
          </>
        </Container>
      </Section>
    </>
  );
};

export default CreateEventPage;
