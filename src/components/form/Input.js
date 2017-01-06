import React from 'react';
import { css } from 'glamor';
import Globals from '../../utils/Globals';

const inp = css({
  backgroundColor: 'transparent',
  padding: 15,
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

const Input = ({
  half,
  placeholder,
  type,
  name,
  value,
  onChange,
}) => {
  return half ? (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inp} events`}
      name={name}
      value={value}
      onChange={onChange}
      {...css({maxWidth: 'calc(50% - 32px)'})}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inp} events`}
      name={name}
      value={value}
      onChange={onChange}
      {...css({maxWidth: 'calc(100% - 32px)'})}
    />
  )
}

export default Input;
