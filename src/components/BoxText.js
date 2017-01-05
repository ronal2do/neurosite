import React from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

const sec = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.secundary,
});

const Banner = ({ children, image, title }) => {
  return (
    <section
      className={sec}
      {...style({backgroundImage: `url(${image})`} )}
    >
          <h1 style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
          <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Totam accusamus odio culpa numquam recusandae explicabo
             soluta labore quaerat excepturi deleniti ipsa aut facere
             blanditiis, sit debitis, dolorem, quam? Quod, adipisci.
           </p>
    </section>
  );
}

export default Banner;
