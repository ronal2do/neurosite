import React from 'react';
import Globals from '../utils/Globals';
import { css } from 'glamor';

import Lesson from './Lesson';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: Globals.colors.gray,
})

const btn = css({
  width: '50%',
  maxWidth: '1100px',
  border: 'none',
  background: '#e7e7e7',
  paddingTop: 30,
  paddingBottom: 30,
  cursor: 'pointer',
  color: Globals.colors.textGray,
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.7em',
  borderRadius: 3,
  transition: 'all 100ms linear',
  ':hover' : {
    background: 'black',

  },
  '@media (max-width: 767px)': {
    width: '100%',
  },

})

const btns = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    border: 'none',
  },

})

const LessonList = ({lessons}) => {
  return (
    <div className={cont}>
        {lessons.map((lesson, key) => {
            return <Lesson key={lesson._id} lesson={lesson} />;
        })}
      <div className={btns}>
        <button className={btn}>Carregar mais notícias</button>
        <button className={btn}>Carregar mais notícias</button>
      </div>
    </div>
  );
}

export default LessonList;
