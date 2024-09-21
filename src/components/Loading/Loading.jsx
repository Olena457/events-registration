import { ClimbingBoxLoader } from 'react-spinners';

import css from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={css.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};
