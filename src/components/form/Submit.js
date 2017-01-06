import React from 'react';
import { css, style } from 'glamor';
import Globals from '../../utils/Globals';

const submit = css({
  color: 'white',
  width: '100%',
  height: '51px',
  borderRadius: '2px',
  padding: '10px 40px',
  transition: 'all .2s ease-in-out',
  cursor: 'pointer',
  border: `1px solid transparent`,
  textTransform: 'uppercase',
  fontFamily: Globals.fonts.primary,
  fontSize: '18px',
  fontWeight: '100',
  letterSpacing: '5px',
  ':hover': {

  }
})

const Submit = ({value, color}) => {
  return (
    <button className={submit} {...style({backgroundColor: `${color}`})}>
      {value}
    </button>
  );
}

export default Submit;
