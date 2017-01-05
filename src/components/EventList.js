import React from 'react';
import Globals from '../utils/Globals';

import Evento from './Evento';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  marginTop: 60,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  color: Globals.colors.gray,
})

const EventList = ({events}) => {
  return (
    <div className={cont}>
      {events.map((event, key) => {
          return <Evento key={event._id} event={event} />;
      })}

    </div>
  );
}

export default EventList;
