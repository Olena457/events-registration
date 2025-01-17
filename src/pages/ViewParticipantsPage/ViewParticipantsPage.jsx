// import { useParams, useNavigate } from 'react-router-dom';
// import Loading from '../../components/Loading/Loading.jsx';
import ParticipantList from '../../components/ParticipantList/ParticipantList.jsx';
import styles from './ViewParticipantsPage.module.css';

const ViewParticipantsPage = () => {
  // const { cardId } = useParams();
  // const [participants, setParticipants] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  return (
    <div className={styles.wrapperCard}>
      <h2 className={styles.title}>Participants for Event{cardId} </h2>
      <ParticipantList participants={participants} />
    </div>
  );
};

export default ViewParticipantsPage;
