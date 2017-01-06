import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const sec = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'black',
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
});

const inp = css({
  width: '100%',
  maxWidth: '1100px',
  padding: '40px 10px',
  border: 'none',
  color: 'black',
  fontFamily: Globals.fonts.secundary,
  textTransform: 'lowercase',
  fontStyle: 'italic',
  fontSize: 24,
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    padding: '0px 10px',
  },
})

const h1 = css({
  textTransform: 'uppercase',
  letterSpacing: '0.5em',
  fontWeight: '100',
  whiteSpace: 'nowrap',
  '@media (max-width: 767px)': {
    whiteSpace: 'normal'
  },
})

const Divi = ({title, subTitle}) => {
  return (
    <div className={sec}>
      <h1 className={h1}>{title}</h1>
      <p className={inp}>{subTitle}</p>
    </div>
  );
}

export default Divi
