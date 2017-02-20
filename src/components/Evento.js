import React from 'react';
import Globals from '../utils/Globals';
import pin from '../media/images/pin.svg';
import { css } from 'glamor';

const cont = css({
  width: 'calc(50% - 10px)',
  border: 'none',
  marginTop: 45,
  marginBottom: 45,
  '@media (max-width: 767px)': {
    width: '100%',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  color: Globals.colors.green,
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
})


const btn = css({
  border: '2px solid transparent',
  background: Globals.colors.green,
  padding: 30,
  cursor: 'pointer',
  color: '#1e2b30',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
  textDecoration: 'none',
  transition: Globals.transitions.default,

  ':hover' : {
    background: 'transparent',
    color: Globals.colors.green,
    border: `2px solid ${Globals.colors.green}`,
  }

})

const header = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  maxWidth: 430,
  color: 'white',
  flexWrap: 'wrap',
})

const tag = css({
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  maxWidth: 320,
  color: 'white',
  paddingBottom: 30,
})

const date = css({
  border: '1px solid white',
  padding: '20px 30px',
})

const Evento = ({event}) => {
  return (
    <div className={cont}>
      <div className={header}>
        <div className={date}>{event.date}</div>
        <div><img src={pin} alt={event.title}/> {event.location}</div>
        <div>  </div>
      </div>
      <div>
        <h1 className={h2}>{event.title}</h1>
        <p>{event.body}</p>
        <p className={tag}>
          {/* {event.tags} */}
        </p>
      </div>

      <a href={event.link} target="_blank" className={btn}>inscreva-se</a>
    </div>
  );
}

export default Evento;
