import React, { Component } from 'react';
import Globals from '../utils/Globals';
import 'expose?$!expose?jQuery!jquery'; // eslint-disable-line
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import Channel from './Channel';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  marginTop: 60,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  color: Globals.colors.gray,
  xIndex: '1',
})

class VideoList extends Component {

  componentDidMount() {

   var carousel = $("#owl-demo");

   carousel.owlCarousel({
    itemsCustom: [
      [0,3]
    ],
     afterAction: function(el){
       //remove class active
       this
       .$owlItems
       .removeClass('active')

       //add class active
       this
       .$owlItems //owl internal $ object containing items
       .eq(this.currentItem + 1)
       .addClass('active')

     }

    });
  }
  render() {
    const { videos } = this.props;

    return (

      <div className={cont}>
        <OwlCarousel
          id="owl-demo"
          slideSpeed={300}
          items={1}
          navigation
          autoPlay
        >
        {videos.map((video, key) => {
            return <Channel key={video._id} video={video} />;
        })}
        </OwlCarousel>
      </div>
    );
  }
}

export default VideoList;
//
