import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  backgroundColor: Globals.colors.primary,
  width: '100%',
  height: 'calc(100vh - 227px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});

const Hero = ({ children, image, title }) => {
  return (
    <section
      className={sec}
      {...style({backgroundImage: `url(${image})`} )}
    >
        <h1>{title}</h1>
    </section>
  );
}

export default Hero;
