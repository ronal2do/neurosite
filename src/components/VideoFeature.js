import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

import teste from '../media/images/youtube.png'

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: Globals.colors.gray,
})

const btn = css({
  border: 'none',
  background: Globals.colors.blue,
  padding: 30,
  cursor: 'pointer',
  color: 'white',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
})

const VideoFeature = ({articles}) => {
  return (
    <div className={cont}>
      <img src={teste} alt="" width="100%"/>
      <button className={btn}>Acesse nosso canal</button>
    </div>
  );
}

export default VideoFeature;
