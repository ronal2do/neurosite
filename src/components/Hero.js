import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  backgroundColor: Globals.colors.primary,
  width: '100%',
  height: 'calc(100vh - 150px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});

const Hero = ({ children, image }) => {
  return (
    <section
      className={sec}
      {...style({backgroundImage: `url(${image})`} )}
    >
        
    </section>
  );
}

export default Hero;
