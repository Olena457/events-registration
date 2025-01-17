import styles from './ContainerWrapper.module.css';
const ContainerWrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default ContainerWrapper;
