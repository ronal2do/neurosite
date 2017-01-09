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
        <div {...style({display: 'flex'})}>

           {videoIndex >= 1 ?
             <Channel
               title={videos[videoIndex - 1].title}
               youtube={videos[videoIndex - 1].youtube}
               body={videos[videoIndex - 1].body}
              /> : <div className={nll}></div>
           }

           <Channel
             title={videos[videoIndex].title}
             youtube={videos[videoIndex].youtube}
             body={videos[videoIndex].body}
             prevStep={this.prevStep.bind(this)}
             nextStep={this.nextStep.bind(this)}
             videoIndex={videoIndex}
             max={MAX}
             active
            />

          {videoIndex + 1 < MAX ?
            <Channel
              title={videos[videoIndex + 1].title}
              youtube={videos[videoIndex + 1].youtube}
              body={videos[videoIndex + 1].body}
             /> : <div className={nll}></div>
          }

        </div>
      </div>
    );
  }
}

export default VideoList;
