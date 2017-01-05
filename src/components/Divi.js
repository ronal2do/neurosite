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
})

const Divi = ({title, subTitle}) => {
  return (
    <div className={sec}>
      <h1 {...css({whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.7em', fontWeight: '100',})}>{title}</h1>
      <p className={inp}>{subTitle}</p>
    </div>
  );
}

export default Divi
