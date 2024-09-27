import css from './ContainerWrapper.module.css';
const ContainerWrapper = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
export default ContainerWrapper;
