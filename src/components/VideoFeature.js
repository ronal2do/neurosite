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
  border: '2px solid transparent',
  background: Globals.colors.blue,
  padding: 30,
  cursor: 'pointer',
  color: 'white',
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
  textDecoration: 'none',
  transition: Globals.transitions.default,
  ':hover' : {
    background: 'transparent',
    color: Globals.colors.blue,
    border: `2px solid ${Globals.colors.blue}`,
  }
})

const VideoFeature = ({articles}) => {
  return (
    <div className={cont}>
      <img src={teste} alt="" width="100%"/>
      <a href="https://www.youtube.com/channel/UCKwHa2um1k8dPQVaXk3TPsw" target="_blank" className={btn}>Acesse nosso canal</a>
    </div>
  );
}

export default VideoFeature;
