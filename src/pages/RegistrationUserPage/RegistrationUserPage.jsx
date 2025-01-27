import styles from './RegistrationUserPage.module.css';
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
