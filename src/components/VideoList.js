import React, { Component } from 'react';
import {style} from 'glamor';

import Channel from './ChannelTest';

class VideoList extends Component {
  state = {
  	videoIndex: 0,
  }

  nextStep = () => this.setState({ videoIndex: this.state.videoIndex + 1 });

  prevStep = () => this.setState({ videoIndex: this.state.videoIndex - 1 });

  renderVideos () {

    const { videos } = this.props;

    return videos.map((video, index) => {
      // const { videoIndex } = this.state

      return (
        <Channel key={video._id} video={video} />
      )
    })
  }

  render() {

    // const { videos } = this.props;

    return (
      <div>
        <div {...style({display: 'flex'})}>

            {/* {videos.slice(0,3).map((video, key) => {
              return <Channel key={video._id} video={video} />;
            })} */}

           <Channel title="Lorem dolem ipsum" youtube="tpjhftAYUAQ" body="aaa"/>
           <Channel title="Lorem dolem ipsum" youtube="k4zizW0btsg" body="aaa" active/>
           <Channel title="Lorem dolem ipsum" youtube="MA240SwOsxU" body="aaa"/>

          {/* {videos[this.state.videoIndex]} */}
          {/* {this.renderVideos()} */}
        </div>
      </div>
    );
  }
}

export default VideoList;
