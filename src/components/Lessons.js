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
  state = { categories: [], articles: [], category_id: '' }

  componentDidMount = () => {
    this.getCats();
    this.getArticles();
  };

   getCats = () => {
       this.setState({
         isLoading: true,
       });

      axios.get('http://neuroedu.co/api/category')
        .then(response => {
          this.setState({categories: response.data})
       })
       .catch(function (error) {
         console.log(error);
     });

     this.setState({
       isLoading: false,
     });

  };

 getArticles = () => {
   this.setState({
     isLoading: true,
   });

   axios.get(`http://neuroedu.co/api/article`)
     .then(response => {
       this.setState({articles: response.data});
    })
    .catch((error) => {
      console.log(error);
  });

  this.setState({
    isLoading: false,
  });
 };

   onChange = (categorie) => {
     this.setState({
       category_id: categorie.id
     })
   }

  render() {
    const { categories, articles, category_id } = this.state;

    return (
      <div className={cont}>
        <Sidebar categories={categories} onClick={this.onChange} />
        <LessonList lessons={articles} filter={category_id} />
      </div>
    );
  }
}

export default Lessons;
