import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #e7e7e7',
  '@media (max-width: 767px)': {
    //
  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  color: Globals.colors.green,
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
})

const Lesson = ({lesson}) => {
  return (
    <div className={cont}>
      <div {...css({padding: '45px 65px'})}>
        <h1 className={h2}>{lesson.title}</h1>
        <p>{lesson.body}</p>
      </div>
    </div>
  );
}

export default Lesson;
