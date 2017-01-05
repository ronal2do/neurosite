import React, { Component } from 'react';
import { css } from 'glamor';

import graph from 'fb-react-sdk';
import moment from 'moment';
import 'moment/locale/pt-br' ;

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

class BoxFacebook extends Component {
  state = {
    post: '',
  }

  componentDidMount() {
    const access_token = "EAACEdEose0cBAMs6EdLNeexLeTkMvfWMKdZBDAm093Pe0oK2HdgHFaAwyCsI7m2TZAOZCRwzwd0xNfmeRYtSp8xsoTP4e6O0RT7HhpseuM373lLf9GiV3fR5bcab6bTG9Ka63pdoGzPkSrmZBihGWIS2hVWboh5tfHcgyStwVAZDZD";

    // graph.extendAccessToken({
    //      "client_id":      '1370680406285282'
    //    , "client_secret":  'c38c4446f0363b13a6c956b469b37bc0'
    //  }, function (err, facebookRes) {
    //     console.log(facebookRes);
    //  });

    graph.get('dlimaart/posts', {limit: 1, access_token: access_token}, (err, res) => {
      const rp = res.data[0];

      if (res.data[0].message) {
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
        <h1 style={{color: 'white'}}>{moment(post.created_time).fromNow()}</h1>
        <p>
          {post.message}
         </p>
      </section>
    );
  }
}

export default BoxFacebook;
