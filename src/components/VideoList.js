import React, { Component } from 'react';
import Globals from '../utils/Globals';
import 'expose?$!expose?jQuery!jquery'; // eslint-disable-line
import OwlCarousel from 'react-owl-carousel';
import Channel from './Channel';

class VideoList extends Component {
  componentDidMount() {

  }

  render() {
    const { videos } = this.props;

    return (
        <OwlCarousel
          slideSpeed={300}
          items={3}
          stagePadding={100}
          navigation
          autoPlay
        >
          {videos.map((video, key) => {
              return <Channel key={video._id} video={video} />;
          })}
        </OwlCarousel>
    );
  }
}

export default VideoList;
