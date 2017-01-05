import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  width: 'calc(50% - 10px)',
  border: 'none',
  marginTop: 45,
  marginBottom: 45,
  '@media (max-width: 767px)': {
    width: '100%',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  color: Globals.colors.green,
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
})


const btn = css({
  border: 'none',
  background: Globals.colors.green,
  padding: 30,
  cursor: 'pointer',
  color: '#1e2b30',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
})

const Evento = ({event}) => {
  return (
    <div className={cont}>
      <div>
        14 nov  pin São Paulo
      </div>
      <div>
        <h1 className={h2}>{event.title}</h1>
        <p>{event.body}</p>
      </div>
      <button className={btn}>inscreva-se</button>

    </div>
  );
}

export default Evento;
