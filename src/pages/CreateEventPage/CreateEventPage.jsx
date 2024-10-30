import CreateEventForm from '../../components/CreateEventForm/CreateEventForm.jsx';
import css from './CreateEventPage.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
const CreateEventPage = () => {
  return (
    <>
      <ContainerWrapper>
        <h2 className={css.title}>Create a New Event!</h2>
        <CreateEventForm />
      </ContainerWrapper>
    </>
  );
};

export default CreateEventPage;
