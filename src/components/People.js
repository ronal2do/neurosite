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
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  color: 'white',
  flexWrap: 'wrap',
  borderRadius: '50%',
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const People = ({title, active, youtube, nextStep, prevStep, videoIndex, max, body}) => {
  return active ? (
    <div className={cont} >
      <a href={`https://www.youtube.com/watch?v=${youtube}`} target="_blank" {...style({textDecoration: 'none'})} >
        <h1 className={h2}>{title}</h1>
      </a>
      <div className={header}>
        <img src={`http://img.youtube.com/vi/${youtube}/maxresdefault.jpg`} alt="" {...style({width: 150, borderRadius: '50%', height: 150})}/>
      </div>
      <div {...style({display: 'flex', padding: '10px 35px', textAlign: 'left'})}>
        <div>
          <a href={`https://www.youtube.com/watch?v=${youtube}`} target="_blank" {...style({textDecoration: 'none'})} >
            <h1 className={h2}>{title}</h1>
          </a>
          <p>
            {body.substr(0, 150)}
          </p>
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
      <h4 className={h2} {...style({color: 'rgba(0,0,0,0.3)'})}>{title}</h4>
      <br/>
      <div className={header} {...style({backgroundImage: `url(http://img.youtube.com/vi/${youtube}/maxresdefault.jpg)`, maxWidth: '100%', height: '161', opacity: 0.4})}></div>
    </div>
  );
}

export default People;
