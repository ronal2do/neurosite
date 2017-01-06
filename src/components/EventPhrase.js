import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  color: 'white',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 767px)': {

  },
})

const h1 = css({
  fontFamily: Globals.fonts.secundary,
  fontSize: '3em',
  '@media (max-width: 767px)': {
    fontSize: '1.5em',
  },
})

const h5 = css({
  fontFamily: Globals.fonts.primary,
  letterSpacing: '8px',
  textTrasnform: 'uppercase',
  fontWeight: '100',
  maxWidth: 600,
})

const EventPhrase = () => {
  return (
    <div className={cont}>
      <h1 className={h1}>quer fazer seu evento conosco?</h1>
      <h3 className={h5}>ENTRE EM CONTATO OU ENVIE SUA SUGESTÃO ABAIXO</h3>
    </div>
  );
}

export default EventPhrase;
