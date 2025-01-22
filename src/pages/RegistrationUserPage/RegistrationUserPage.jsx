import styles from './RegistrationUserPage.module.css';
// import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
import SignUp from '../../components/SignUp/SignUp.jsx';

const RegistrationUserPage = () => {
  return (
    <>
      <div className={styles.userRegisPage}>
        <div className={styles.userRegisContainer}>
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default RegistrationUserPage;
