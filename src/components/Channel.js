import React from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

const cont = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
  width: '50%',
  maxWidth: '50%',

  '@media (max-width: 767px)': {
      width: '100%',
      padding: '0px',
  },
})

const conc = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
  width: '25%',
  maxWidth: '25%',

  '@media (max-width: 767px)': {
      width: '100%',
      padding: '0px',
  },
})


const h2 = css({
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',
  color: 'black',
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
})


const btn = css({
  border: 'none',
  background: 'transparent',
  padding: 20,
  cursor: 'pointer',
  color: '#1e2b30',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
})

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  color: 'white',
  flexWrap: 'wrap',
  borderRadius: 4,
  width: '100%',
  height: '261',
  backgroundSize: 'cover',
})

const Channel = ({video}) => {
  return video.active ? (
    <div className={cont} >
      <h1 className={h2}>{video.title}</h1>
      <div className={header} {...style({backgroundImage: `url(http://img.youtube.com/vi/${video.youtube}/maxresdefault.jpg)`, maxWidth: '100%' })}>
        <img src="" alt=""/>
      </div>
      <div {...style({display: 'flex', padding: '10px 35px', textAlign: 'left'})}>
        <div>
          <h1 className={h2}>{video.title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             iste error minima, nostrum
          </p>
        </div>
        <div {...style({display: 'flex'})}>
          <button className={btn}>D</button>
          <button className={btn}>B</button>
        </div>
      </div>
    </div>
  ) : (
    <div className={conc} >
      <br/>
      <h4 className={h2} {...style({color: 'rgba(0,0,0,0.3)'})}>{video.title}</h4>
      <br/>
      <div className={header} {...style({backgroundImage: `url(http://img.youtube.com/vi/${video.youtube}/maxresdefault.jpg)`, maxWidth: '100%', height: '161', opacity: 0.4})}></div>
    </div>
  );
}

export default Channel;
