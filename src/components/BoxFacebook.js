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
    access_token: 'EAACEdEose0cBAAaPZCTnQZB4ZAO1HsgFXIYRJeIqyms9APeQuhfT2zg6rguZBjMAp82LmOeYFKTUmKyiG9tY9FUZCPop6ooUnJF9cpnYkTsu429S3pWxIvinwFGntnV0WWIXJZCUZBZCbYvK2O3cZAZCCUAx7omiKSin5HXc0k2u5fNtNlWZBfZCO99ZBRHso2urDSB8ZD',
    // access_token: '2135275936698660|KnT3NpVx-9n7MGSIANzVT32JCho',
    // access_token: 'EAACEdEose0cBAOitveAXu9tLsHWS3beK4oq8fxLPrZBV2n15u3lZCSKNRHZANksTzVZBhQTLKLSSvLxN8PTMSuQEfcHWBhAWF3gYKBCzKCp6ZALqfVGGrowK2kgnnG1tRw05zdVOv0lfWv66sbe6lYdNPO9WR5Y2amerMa9HzlliZBIabkw9nZBLiC0MjxNMHgZD',
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
