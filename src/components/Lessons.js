import React, {Component} from 'react';
import Globals from '../utils/Globals';
import axios from 'axios';

import { css } from 'glamor';

import Sidebar from './Sidebar';
import LessonList from './LessonList';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: Globals.colors.gray,
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

class Lessons extends Component {
  state = { categories: [], articles: [] }

  componentDidMount = () => {
    this.getCats();
    this.getArticles();
  };

   getCats = () => {
      axios.get('http://localhost:8000/api/category')
        .then(response => {
          this.setState({categories: response.data})
       })
       .catch(function (error) {
         console.log(error);
     });
  };

  getArticles = () => {
     axios.get('http://localhost:8000/api/article')
       .then(response => {
         this.setState({articles: response.data})
      })
      .catch(function (error) {
        console.log(error);
    });
 };

  render() {
    const { categories, articles } = this.state;

    return (
      <div className={cont}>
        <Sidebar categories={categories}/>
        <LessonList lessons={articles}/>
      </div>
    );
  }
}

export default Lessons;
