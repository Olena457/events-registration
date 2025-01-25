import React from 'react';
import CreateCard from '../../components/CreateCard/CreateCard.jsx';
import styles from './CreateCardPage.module.css';

const CreateCardPage = () => {
  return (
    <>
      <div className={styles.createPage}>
        <div className={styles.createContainer}>
          <CreateCard />
        </div>
      </div>
    </>
  );
};

export default CreateCardPage;
