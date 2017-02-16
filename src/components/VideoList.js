import React, { Component } from 'react';
import {css,style} from 'glamor';

import Channel from './Channel';

const nll = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
  width: '25%',
  maxWidth: '25%',

  '@media (max-width: 767px)': {
      display: 'none',
  },
})

class VideoList extends Component {
  state = {
  	videoIndex: 0,
  }

  nextStep = () => this.setState({ videoIndex: this.state.videoIndex + 1 });

  prevStep = () => this.setState({ videoIndex: this.state.videoIndex - 1 });

  render() {

    const { videos } = this.props;
    const { videoIndex } = this.state;
    const MAX = videos.length;

    return (
      <div>
        {videos.length > 0 ?
        <div {...style({display: 'flex'})}>

           {videoIndex >= 1 ?
             <Channel
               title={videos[videoIndex - 1].snippet.title}
               youtube={videos[videoIndex - 1].snippet.thumbnails.high.url}
               body={videos[videoIndex - 1].snippet.description}
              /> : <div className={nll}></div>
           }

           <Channel
             title={videos[videoIndex].snippet.title}
             youtube={videos[videoIndex].snippet.thumbnails.high.url}
             body={videos[videoIndex].snippet.description}
             prevStep={this.prevStep.bind(this)}
             nextStep={this.nextStep.bind(this)}
             videoIndex={videoIndex}
             videoId={videos[videoIndex].id.videoId}
             max={MAX}
             active
            />

          {videoIndex + 1 < MAX ?
            <Channel
              title={videos[videoIndex + 1].snippet.title}
              youtube={videos[videoIndex + 1].snippet.thumbnails.high.url}
              body={videos[videoIndex + 1].snippet.description}
             /> : <div className={nll}></div>
          }

        </div> : <p>no videos</p>}
      </div>
    );
  }
}

export default VideoList;
