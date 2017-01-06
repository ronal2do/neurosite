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

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  maxWidth: 320,
  color: 'white',
  flexWrap: 'wrap',
})

const date = css({
  border: '1px solid white',
  padding: '20px 30px',
})

const Evento = ({event}) => {
  return (
    <div className={cont}>
      <div className={header}>
        <div className={date}>14 nov</div>
        <div>pin</div>
        <div>São Paulo</div>
      </div>
      <div>
        <h1 className={h2}>{event.title}</h1>
        <p>{event.body}</p>

      </div>
      <div className={header}>
        <p>#HashTags</p>
        <p>#HashTags</p>
          <p>#HashTags</p>
            <p>#HashTags</p>
              <p>#HashTags</p>
        <p>#HashTags</p>
      </div>
      <button className={btn}>inscreva-se</button>

    </div>
  );
}

export default Evento;
