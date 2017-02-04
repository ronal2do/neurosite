import React from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

import Seta from '../media/images/Seta.svg';
import Iphone from '../media/images/iphone.png';

const cont = css({
  border: 'none',
  padding: '60px 0px 0px',
  textAlign: 'center',
  backgroundImage: `url(${Iphone})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  width: 400,
  height: 450,
  maxWidth: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media (max-width: 767px)': {
    height: 450,
    width: '100%',
    padding: '20px',
    maxWidth: '100%',
  },
})

const conc = css({
  border: 'none',
  padding: '0px 30px',
  textAlign: 'center',
  width: '25%',
  maxWidth: '25%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '@media (max-width: 767px)': {
      display: 'none',
      width: '25%',
      maxWidth: '25%',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',
  color: Globals.colors.green,
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
  // padding: '0 40px',
  cursor: 'disabled',
  width: 65,
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

const People = ({
  name,
  active,
  image,
  nextStep,
  prevStep,
  peopleIndex,
  max,
  office
}) => {
  return active ? (
    <div className={cont} >
      <div className={header}>
        {image ? <div className={header} {...style({backgroundImage: `url('http://neuroedu.co/uploads/professional/${image}')`, backgroundSize: 'cover', maxWidth: '170', height: '170', width: 170, marginTop: 140})}></div> : null}
      </div>
      <div {...style({display: 'flex', padding: '10px 35px', textAlign: 'left', justifyContent: 'space-between', alignItems: 'center' })}>
        <div {...style({display: 'flex'})}>
         {
            peopleIndex >= 1 ?
            <button onClick={prevStep} className={btn}><img src={Seta} alt="" {...style({transform: 'rotate(180deg)'})}/></button>
            : <div className={nll}></div>
          }
        </div>
        <div {...css({textAlign: 'center'})}>
          <h1 className={h2}>{name}</h1>
          <p>
            {office}
          </p>
        </div>
        <div {...style({display: 'flex'})}>
         {
            peopleIndex + 1 < max ?
            <button onClick={nextStep} className={btn}><img src={Seta} alt=""/></button>
            : <div className={nll}></div>
          }
        </div>
      </div>
    </div>
  ) : (
    <div className={conc} >
      <br/>
      <h4 className={h2} {...style({color: 'rgba(0,0,0,0.3)'})}>{name}</h4>
      <br/>
      <div className={header} {...style({backgroundImage: `url(/uploads/professional/${image})`, maxWidth: '100', height: '100', width: 100, filter: 'grayscale(100%)', opacity: 0.7})}></div>
    </div>
  );
}

export default People;
