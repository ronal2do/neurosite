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
    access_token: 'EAAa7Pb6FkLgBABAz86U3ZBFoEF3Rs4HpmSbdBs0zscPgvUqAeXSofq80orTV6RWSpJYbpXHiFxd9OY5nyH7iVKfX4ZAmiPz71Rmx1DCvN7qRiPYPsFpkUrTRQ2VE7iJkDfvDkFFFMv8N7WJZAm4AQOhM0ryqvYZD',
  }

  componentDidMount() {
    // pegar o access_token
    // e setar na const
  }

  componentWillMount() {

    graph.setAccessToken(this.state.access_token);

    graph.get('neuroedu.co/posts', {limit: 1}, (err, res) => {
      if (res.data[0].message) {
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
        <p {...css({padding: '30px 50px'})}>
          {post.message}
        </p>
        <div className={foot}>
          <div {...css({width: '50%',display: 'flex', justifyContent: 'center' ,padding: '30px 0px', borderRight: '1px solid white',})}>
            <i className="fa fa-facebook"></i>
          </div>
          <div {...css({width: '50%',display: 'flex', justifyContent: 'center' ,padding: '30px 0px'})}>
            <i className="fa fa-thumbs-up"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default BoxFacebook;
