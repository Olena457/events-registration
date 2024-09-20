import css from './Home.module.css';
import CardEventList from '../../CardEventList/CardEventList';

const Home = ({ events, participants, loading }) => {
  return (
    <div>
      <h2 className={css.title}>Welcom to the event board!</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CardEventList events={events} participants={participants} />
      )}
    </div>
  );
};

export default Home;
