import React from 'react';
import { css, style } from 'glamor';

import logoFooter from '../media/images/logo-footer.svg';

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
  color: Globals.colors.gray,
  fontFamily: Globals.fonts.secundary,
  textTransform: 'lowercase',
  lineHeight: '1em',
  fontSize: '20px',
  letterSpacing: '1.5px',
});

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  paddingtop: 250,
  paddingBottom: 220,
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const ul = css({
  paddingtop: 140,
  margin: 0,
  display: 'flex',
  listStyle: 'none',
})

const log = css({
  padding: '0 35px',
  transform: 'scale(1.4)',
  '@media (max-width: 767px)': {
      padding: 0,
  },
})

const Footer = ({ color, contact }) => {
  return contact ? (
    <footer className={sec} {...style({backgroundColor: `${color}` } )} id={name}>

      <img src={logoFooter} alt="" />

      <ul className={ul}>
        <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-facebook" {...style({  padding: '0px 15px' })}></i></a></li>
        <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-linkedin" {...style({  padding: '0px 15px' })}></i></a></li>
        <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-youtube" {...style({  padding: '0px 15px' })}></i></a></li>
        <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-instagram" {...style({  padding: '0px 15px' })}></i></a></li>
      </ul>

      <div>Copyright 2016 neuroedu.co</div>

    </footer>
  ) : (
    <footer className={sec} {...style({backgroundColor: `${color}` } )} id={name}>
      <div className={cont}>
        <div className={log}>
         {color === 'white' ?
          <Logo color={Globals.colors.logo} colorSec={Globals.colors.logo2} /> : <Logo color='white' colorSec='white' color3='white'/>
         }
         </div>
        <div {...style({padding: '0 15px'})}>
          <ul className={ul}>
            <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-facebook" {...style({  padding: '0px 15px' })}></i></a></li>
            <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-linkedin" {...style({  padding: '0px 15px' })}></i></a></li>
            <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-youtube" {...style({  padding: '0px 15px' })}></i></a></li>
            <li><a href="" target="_blank" {...style({color: Globals.colors.gray })}><i className="fa fa-instagram" {...style({  padding: '0px 15px' })}></i></a></li>
          </ul>
        </div>
      </div>
      <div>Copyright 2016 neuroedu.co</div>
    </footer>
  );
}

export default Footer;
