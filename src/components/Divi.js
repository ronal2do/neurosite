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
  padding: 15,
  border: 'none',
  color: 'black',
  fontFamily: Globals.fonts.secundary,
  textTransform: 'lowercase',
  fontStyle: 'italic',
  fontSize: 18,
})

const Divi = ({title, subTitle}) => {
  return (
    <div className={sec}>
      <h2 {...css({whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.7em', fontWeight: '100',})}>{title}</h2>
      <p className={inp}>{subTitle}</p>
    </div>
  );
}

export default Divi
