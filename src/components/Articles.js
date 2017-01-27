import React, { Component } from 'react';
import Globals from '../utils/Globals';

// import { getNewsList } from '../utils/api';
import axios from 'axios';
import Article from './Article';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  color: Globals.colors.gray,
})

const btn = css({
  width: '100%',
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
})

class Articles extends Component {
    state = { numbers: 10, newests: [] }

    componentDidMount = () => {
      this.getNews();
    };

     getNews = () => {
        axios.get('http://localhost:8000/api/newest')
          .then(response => {
            this.setState({newests: response.data})
         })
         .catch(function (error) {
           console.log(error);
       });
    };

    moreItems = () => this.setState({ numbers: this.state.numbers + 10 });

    render() {
      const { numbers, newests } = this.state;
      const MAX = newests.length;

      return (
      <div className={cont}>
        {newests.slice(0, numbers).map((article, key) => {
            return <Article key={article.id} article={article} />;
        })}

        { numbers <= MAX ? <button className={btn} onClick={this.moreItems} >Carregar mais notícias</button>: null }
      </div>
    );
  }
}

export default Articles;
