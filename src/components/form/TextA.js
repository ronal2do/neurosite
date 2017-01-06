import React from 'react';
import { css } from 'glamor';
import Globals from '../../utils/Globals';

const inp = css({
  backgroundColor: 'transparent',
  padding: '13px 19px 14px',
  fontFamily: Globals.fonts.primary,
  fontSize: '18px',
  color: 'white',
  outline: '0',
  width: '100%',
  fontWeight: '100',
  border: `1px solid white`,

  '@media (max-width: 767px)': {
    maxWidth: '100%',
  },

})

const TextA = ({placeholder, name, value, onChange}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`${inp} events`}
      rows="3"
      name={name}
      value={value}
      onChange={onChange}
      {...css({maxWidth: 'calc(100% - 40px)'})}
      />
  );
}

export default TextA;
