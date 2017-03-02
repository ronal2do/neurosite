import React, {Component} from 'react';
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

// const btn = css({
//   width: '50%',
//   maxWidth: '1100px',
//   border: 'none',
//   background: '#e7e7e7',
//   paddingTop: 30,
//   paddingBottom: 30,
//   cursor: 'pointer',
//   color: Globals.colors.textGray,
//   fontFamily: Globals.fonts.primary,
//   textTransform: 'uppercase',
//   letterSpacing: '0.7em',
//   borderRadius: 3,
//   transition: 'all 100ms linear',
//   ':hover' : {
//     background: 'black',
//
//   },
//   '@media (max-width: 767px)': {
//     width: '100%',
//   },
//
// })

const btn = css({
  width: '100%',
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

  }

})

class LessonList extends Component {
    state = {
    	numbers: 10,
    }

    moreItems = () => this.setState({ numbers: this.state.numbers + 5 });

    minusItems = () => this.setState({ numbers: this.state.numbers - 5 });

    render() {
      const { lessons, filter } = this.props;
      const { numbers } = this.state;

      const isCategory = filter ? lesson => lesson.category_id === filter : lesson => lesson.category_id !== filter;

      return (
        <div className={cont}>
          {lessons.slice(0, numbers).filter(isCategory).map((lesson, key) => {
              return <Lesson key={lesson.id} lesson={lesson} />;
          })}

          { numbers <= lessons.length ? <button className={btn} onClick={this.moreItems} >Carregar mais artigos</button>: null }

        </div>
    );
  }
}

export default LessonList;
