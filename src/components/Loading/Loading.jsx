import css from './Loading.module.css';

const Loading = () => {
  return (
    <div className={css.loader}>
      <div className={css.spinner}></div>
    </div>
  );
};

export default Loading;
