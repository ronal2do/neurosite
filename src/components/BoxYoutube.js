import React, { Component } from 'react';
import { css } from 'glamor';

// import moment from 'moment';
// import 'moment/locale/pt-br' ;

import Globals from '../utils/Globals';

const sec = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.secundary,
});

class BoxYoutube extends Component {
  state = {
    video: 'Play',
  }

  componentDidMount() {
    // pegar o access_token
    // e setar na const
  }

  componentWillMount() {
    //

  }

  render() {
    const { video } = this.state;

    return (
      <section className={sec} >
        <a href="#">
        <h1 style={{color: 'white'}}>{ video }</h1>
        <p>
          ultima transmissão
         </p>
         <small>22 hrs atrás</small>
        </a>
      </section>
    );
  }
}

export default BoxYoutube;
