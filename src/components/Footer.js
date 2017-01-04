import React from 'react';
import { css, style } from 'glamor';

import Logo from './Logo';
import Globals from '../utils/Globals';

const sec = css({
  width: '100%',
  paddingTop: '150px',
  paddingBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexDirection: 'column',
  color: '#b8b8b8',

});

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  paddingtop: 150,
  paddingBottom: 230,
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const ul = css({
  padding: 15,
  margin: 0,
  display: 'flex',
  listStyle: 'none',
})

const Footer = ({ color }) => {
  return (
    <footer className={sec} {...style({backgroundColor: `${color}` } )} id={name}>
      <div className={cont}>
        <div {...style({padding: '0 15px'})}>
         {color === 'white' ? 
          <Logo color={Globals.colors.cyan}/> : <Logo color='white'/>
         }
         </div>
        <div {...style({padding: '0 15px'})}>
          <ul className={ul}>
            <li>*Pic</li>
            <li>*Pic</li>
            <li>*Pic</li>
            <li>*Pic</li>
            <li>*Pic</li>
          </ul>
        </div>
      </div>
      <div>Copyright 2016 neuroedu.co</div>
    </footer>
  );
}

export default Footer;
