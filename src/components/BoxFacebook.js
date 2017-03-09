import React, { Component } from 'react';
import { css } from 'glamor';

import graph from 'fb-react-sdk';
import moment from 'moment';
import 'moment/locale/pt-br' ;

import commma from '../media/images/Untitled-2.svg';

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
  backgroundColor: '#3b5998',
  fontFamily: Globals.fonts.secundary,
  borderRight: '1px solid white',
  borderLeft: '1px solid white',
});

const foot = css({
  width: '100%',
  borderTop: '1px solid white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

class BoxFacebook extends Component {
  state = {
    post: '',
    access_token: 'EAAeWBau0USQBAC3FaRYrA0B7Y2Q2Dkp9mV6JaQGyjPZCw3rZADpPqdtJprnZCqlc8ndPh6z76AE41h0jOFPIOAsv8cVuiZC1skurk4q4H0tLDT7pLvDsu1NDRXpoNzAMQVsbowdrDxzZCvfUWeKFgt7nxOWOAJk0ZD',

  }

  componentDidMount() {
    // pegar o access_token
    // e setar na const
  }

  componentWillMount() {

    graph.setAccessToken(this.state.access_token);

    graph.get('/neuroedu.coBR/posts?fields=message,picture,created_time,story,description,link', {limit:10}, (err, res) => {
      // console.log(res.data[0]);
      if (res.data[0]) {
        const rp = res.data[0];
         this.setState({
             post: rp
         });
      }
    });

  }

  render() {
    const { post } = this.state;
    return (
      <section className={sec} >
        <div {...css({alignSelf: 'flex-start'})}>
          <img src={commma} alt="" {...css({marginTop: '-5px', padding: '0 50px'})}/>
        </div>
        <h1 style={{color: 'white'}}>{moment(post.created_time).fromNow()}</h1>
        <div {...css({ display: 'flex'})}>
          <p {...css({padding: '20px 50px'})}>
            { post.message ? post.message : post.description}
          </p>
        </div>

          <div className={foot}>
            <div {...css({width: '50%',display: 'flex', justifyContent: 'center' ,padding: '30px 0px', borderRight: '1px solid white',})}>
              <a href={ post.link } target="_blank" {...css({color: 'white'})} >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div {...css({width: '50%',display: 'flex', justifyContent: 'center' ,padding: '30px 0px'})}>
              <a href={ post.link } target="_blank" {...css({color: 'white'})} >
                <i className="fa fa-thumbs-up">{post.admin_creator}</i>
              </a>
            </div>
          </div>
      </section>
    );
  }
}

export default BoxFacebook;
