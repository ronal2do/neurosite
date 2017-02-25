
import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const soc = css({
  display: 'flex',

  '@media (max-width: 767px)': {
    padding: 10,
  },
})

const h1 = css({
  fontFamily: Globals.fonts.secundary,
  fontSize: '3em',

  '@media (max-width: 767px)': {
    fontSize: '1.5em',
    padding: 10,
  },
})

const tag = css({
  padding: 25,
  border: '2px solid white',
  cursor: 'pointer',
  transition: Globals.transitions.default,
  ':hover' : {
    backgroundColor: Globals.colors.blue,
  },
  '@media (max-width: 767px)': {
    padding: 5,
  },
})

const Logo = ({text}) => {
  return text ? (
      <h1 className={h1}>Áreas de Brodmann</h1>
  ) : (
    <div>
      <h1 className={h1}>Nos acompanhe <br/> nas redes sociais</h1>
      <div className={soc}>
        <div className={tag}>
          <a href="https://www.facebook.com/neuroedu.coBR/" target="_blank" {...css({color: 'white'})}>
            <i className="fa fa-fw fa-2x fa-facebook"></i>
          </a>
        </div>
        <div className={tag}>
          <a href="https://www.youtube.com/channel/UCKwHa2um1k8dPQVaXk3TPsw" target="_blank" {...css({color: 'white'})}>
            <i className="fa fa-fw fa-2x fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
