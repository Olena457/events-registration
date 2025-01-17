import styles from './RegistrationUserPage.module.css';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
import SignUp from '../../components/SignUp/SignUp.jsx';

const RegistrationUserPage = () => {
  <ContainerWrapper>
    <h2 className={styles.title}>Login page</h2>
    <SignUp />
  </ContainerWrapper>;
};

export default RegistrationUserPage;
