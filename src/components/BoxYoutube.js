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

const lk = css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
  textDecoration: 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: Globals.fonts.secundary,
});

class BoxYoutube extends Component {
  state = {
    video: '|>',
  }

  componentDidMount() {
    // pegar o access_token
    // e setar na const
  }

  componentWillMount() {
    //
  }

  render() {
    // const { video } = this.state;
    const { link } = this.props;

    return (
      <section className={sec} >
        <a href={link} className={lk}>

          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32" xmlSpace="preserve" {...css({width: 85, color: 'white'})}>
            <path fillRule="evenodd" clipRule="evenodd" fill="white" d="M25.999,16c0,0.383-0.199,0.719-0.497,0.906 c0,0.001,0,0.002,0,0.002L7.588,27.848l0,0C7.431,27.944,7.247,28,7.05,28c-0.579,0-1.049-0.479-1.049-1.068 c0-0.004,0-0.008,0-0.012v-0.001V5.113l0.002-0.001C6.002,5.098,6.001,5.083,6.001,5.067C6.001,4.478,6.471,4,7.05,4 c0.199,0,0.385,0.057,0.543,0.155l0.001-0.001c0,0,13.371,8.166,17.909,10.938v0.001C25.801,15.281,25.999,15.616,25.999,16z"></path>
          </svg>

        {/* <p>
          ultima transmissão
         </p>
         <small>22 hrs atrás</small> */}
        </a>
      </section>
    );
  }
}

export default BoxYoutube;
