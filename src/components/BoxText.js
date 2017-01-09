import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  width: '100%',
  display: 'flex',
  padding: 30,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.secundary,
  '@media (max-width: 767px)': {
    padding: 0,
  },
});

const Banner = ({ children, image, title, color }) => {
  return (
    <section
      className={sec}
      {...style({backgroundColor: `${color}`, backgroundImage: `url(${image})`} )}
    >
      <h1 style={{color: 'white'}}>{title}</h1>
      <p {...style({color: 'black'})}>{children}</p>
    </section>
  );
}

export default Banner;
