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

class ChannelList extends Component {
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
               title={videos[videoIndex - 1].title}
               youtube={`//img.youtube.com/vi/${videos[videoIndex - 1].youtube}/sddefault.jpg`}
               link={videos[videoIndex - 1].url}
               body={videos[videoIndex - 1].body}
              /> : <div className={nll}></div>
           }

           <Channel
             title={videos[videoIndex].title}
             youtube={`//img.youtube.com/vi/${videos[videoIndex].youtube}/sddefault.jpg`}
             link={videos[videoIndex].url}
             body={videos[videoIndex].body}
             prevStep={this.prevStep.bind(this)}
             nextStep={this.nextStep.bind(this)}
             videoIndex={videoIndex}
             videoId={videos[videoIndex].url}
             max={MAX}
             active
            />

          {videoIndex + 1 < MAX ?
            <Channel
              title={videos[videoIndex + 1].title}
              youtube={`//img.youtube.com/vi/${videos[videoIndex + 1].youtube}/sddefault.jpg`}
              link={videos[videoIndex + 1].url}
              body={videos[videoIndex + 1].body}
             /> : <div className={nll}></div>
          }

        </div> : <p>no videos</p>}
      </div>
    );
  }
}

export default ChannelList;
