import { ClimbingBoxLoader } from 'react-spinners';

import css from './Loading.module.css';

const Loading = () => {
  return (
    <div className={css.backdrop}>
      <ClimbingBoxLoader color="#36bed6" size={40} />
    </div>
  );
};
export default Loading;
