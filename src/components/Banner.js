import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  backgroundColor: Globals.colors.primary,
  width: '100%',
  paddingTop: '210px',
  paddingBottom: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.primary,
});

const Banner = ({ children, image, title }) => {
  return (
    <section
      className={sec}
      {...style({backgroundImage: `url(${image})`} )}
    >
        <h1 style={{fontWeight: '100', textTransform: 'uppercase'}}>{title}</h1>
    </section>
  );
}

export default Banner;
