import React from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

import Seta from '../media/images/Seta.svg';

const cont = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
  width: '50%',
  maxWidth: '50%',

  '@media (max-width: 767px)': {
      width: '100%',
      padding: '20px',
      maxWidth: '100%',
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
      display: 'none',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',
  color: 'black',
  cursor: 'pointer',
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

const nll = css({
  border: 'none',
  background: 'transparent',
  padding: 20,
  cursor: 'disabled',
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
  backgroundPosition: 'center',
})

const Channel = ({title, active, youtube, nextStep, prevStep, videoIndex, max, body, videoId}) => {
  return active ? (
    <div className={cont} >
      <a href={videoId} target="_blank" {...style({textDecoration: 'none'})} >
        <h1 className={h2}>{title.substr(0, 30)}</h1>
        <div className={header} {...style({backgroundImage: `url(${youtube})`})}></div>
      </a>
      <div {...style({display: 'flex', padding: '10px 35px', textAlign: 'left'})}>
        <div {...style({ height: 150})}>
          { body ? <p>{body.substr(0, 150)}}</p> : <div {...style({ width: 270})}></div> }
        </div>
        <div {...style({display: 'flex'})}>
        {  videoIndex >= 1 ? <button onClick={prevStep} className={btn}><img src={Seta} alt="" {...style({transform: 'rotate(180deg)'})}/></button> : <div className={nll}></div> }
        {  videoIndex + 1 < max ? <button onClick={nextStep} className={btn}><img src={Seta} alt=""/></button> : <div className={nll}></div> }
        </div>
      </div>

    </div>
  ) : (
    <div className={conc} >
      <br/>
      <h4 className={h2} {...style({color: 'rgba(0,0,0,0.3)'})}>{title.substr(0, 50)}</h4>
      <br/>
      <div className={header} {...style({backgroundImage: `url(${youtube})`, maxWidth: '100%', height: '161', opacity: 0.4})}></div>
    </div>
  );
}

export default Channel;
