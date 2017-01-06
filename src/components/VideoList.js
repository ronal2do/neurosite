import React from 'react';
import Globals from '../utils/Globals';
import 'expose?$!expose?jQuery!jquery'; // eslint-disable-line
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

const VideoList = ({videos}) => {
  return (
    <div className={cont}>
      <OwlCarousel
        slideSpeed={300}
        items={3}
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

export default VideoList;
//
