import React from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

import Container from './Container';
import BoxYoutube from './BoxYoutube';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: Globals.colors.gray,
  padding: 50,
})

const video = css({
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  fontWeight: '100',
  color: Globals.colors.blue,
  fontSize: '2.3rem',
  letterSpacing: 8,
  margin: 0,
  marginLeft: 60,
})

const h1 = css({
  fontFamily: Globals.fonts.secundary,
  color: Globals.colors.blue,
  margin: 0,
  lineHeight: '48px',
  fontSize: '3rem',
  zIndex: 10, position: 'absolute'
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
  marginTop: 70,
  transition: Globals.transitions.default,
  ':hover' : {
    background: 'transparent',
    color: Globals.colors.blue,
    border: `2px solid ${Globals.colors.blue}`,
  }
})

const ChannelFeature = ({articles}) => {
  const transmission = 'GVeuXLWhjUQ'
  return (
    <div className={cont}>
      <Container>
        <div {...css({flexDirection: 'column'})}>
          <div {...css({display: 'flex'})}>
            <div {...css({width: '100%'})}>
              <h1 className={video}>Vídeo</h1>
              <h1 className={h1} {...style({ color: 'white', fontSize: '4em'})}>aulas</h1>
            </div>
            <div {...css({width: '100%', maxWidth: 500})}>
              <h1 className={h1} {...style({ width: 450, textShadow: '1px 1px 2px #1e2325', textAlign: 'right'  })}>Não deixe de visitar e se inscrever em nosso canal</h1>
            </div>
          </div>
          <div {...css({display: 'flex', justifyContent: 'space-between'})}>
            <div {...css({backgroundImage: `url('//img.youtube.com/vi/${transmission}/3.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth: 620, width: 620, margin: '50', height: 380, display: 'flex', })}>
              <BoxYoutube link={`https://www.youtube.com/watch?v=${transmission}`}/>
            </div>
           {/*  <div {...css({margin: 50, maxWidth: 200, width: '100%', color: 'white' })}>
              <p {...css({ height: 50 })}></p>
              <p><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quaerat distinctio laudantium praesentium accusantium.</p>
              <p>14 Nov 2017</p> 
            </div>*/}
          </div>
        </div>
      </Container>
      <a href="https://www.youtube.com/channel/UCKwHa2um1k8dPQVaXk3TPsw" target="_blank" className={btn}>Acesse nosso canal</a>
    </div>
  );
}

export default ChannelFeature;
