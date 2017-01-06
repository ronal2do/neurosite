import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
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
  background: Globals.colors.green,
  padding: 30,
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
})

const Channel = ({video}) => {
  return (
    <div className={cont}>
      <h2 className={h2}>{video.title}</h2>
      <div className={header}>
        <img src={`http://img.youtube.com/vi/${video.youtube}/maxresdefault.jpg`} alt="Hora de dormir" width="100%" />
      </div>
      <div>
        <p>{video.body}</p>
      </div>
      <button className={btn}>inscreva-se</button>
    </div>
  );
}

export default Channel;
