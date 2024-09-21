import css from './PartisipantList.module.css';
import Participant from '../Participant/Participant.jsx';
import Loading from '../Loading/Loading.jsx';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Container } from '../Container/container.jsx';
import { Section } from './../Section/Section';

const ParticipantList = ({ participants, loading, error }) => {
  const layout = participants.map((participant, index) => ({
    i: participant.id.toString(),
    x: (index % 4) * 3,
    y: Math.floor(index / 4),
    w: 1,
    h: 1,
  }));

  return (
    <>
      <Section>
        <Container>
          <GridLayout
            className={css.cardContainer}
            layout={layout}
            cols={12}
            rowHeight={150}
            width={1200}
            isResizable={false}
            isDraggable={false}
          >
            {loading && <Loading />}
            {!loading && !error && participants.length === 0 && (
              <h4 className={css.subTitle}>
                No participants in this event yet.
              </h4>
            )}
            {!loading &&
              !error &&
              participants.map(({ email, fullName, id }) => (
                <div key={id} className={css.eventCard}>
                  <Participant id={id} email={email} name={fullName} />
                </div>
              ))}
            {error && <p className={css.error}>Error loading participants.</p>}
          </GridLayout>
        </Container>
      </Section>
    </>
  );
};

export default ParticipantList;
