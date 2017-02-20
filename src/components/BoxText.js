import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  width: '100%',
  padding: 30,

  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.secundary,
  '@media (max-width: 767px)': {
    margin: 0,
  },
});

const Banner = ({ children, image, title, color, font }) => {
  return (
    <section
      className={sec}
      {...style({backgroundColor: `${color}`, backgroundImage: `url(${image})`} )}
    >
      <h1 style={{color: 'white'}}>{title}</h1>
      <span {...style({color: 'black'})}>{children}</span>
      <a href={font} target="_blank" {...style({color: 'white'})}>fonte: {font}</a>
    </section>
  );
}

export default Banner;
