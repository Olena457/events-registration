import css from './CardEventlist.module.css';
import EventCard from './../EventCard/EventCard.jsx';

import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import css from './YourStyles.module.css';
import { Container } from '../Container/container.jsx';
import { Section } from './../Section/Section';

const CardEventList = ({ events, participantsId }) => {
  const layout = events.map((event, index) => ({
    i: event.id.toString(),
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
            {events.map(event => (
              <div key={event.id} className={css.eventCard}>
                <EventCard
                  title={event.title}
                  description={event.description}
                  id={event.id}
                  onRegister={handleRegister}
                  onView={handleView}
                  participantsId={event.participantsId}
                />
              </div>
            ))}
          </GridLayout>
        </Container>
      </Section>
    </>
  );
};

export default CardEventList;
