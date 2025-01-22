import styles from './LogInPage.module.css';
// import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.jsx';
import SignIn from '../../components/SignIn/SignIn.jsx';

const LogInPage = () => {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default LogInPage;
