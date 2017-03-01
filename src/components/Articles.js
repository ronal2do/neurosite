import React, { Component } from 'react';
import Globals from '../utils/Globals';
import axios from 'axios';
// import { getNewestList } from '../utils/api';
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
  fontSize: '1em',
})

class Articles extends Component {
    state = {
      isLoading: true,
      numbers: 4,
      newests: []
    }

    componentDidMount = () => {
      this.getNews();
    };

    getNews = () => {

      this.setState({
        isLoading: true,
      });

      axios.get(`http://neuroedu.co/api/newest`)
        .then(response => {
          this.setState({newests: response.data});
       })
       .catch((error) => {
         console.log(error);
     });

     this.setState({
       isLoading: false,
     });

    };

    moreItems = () => this.setState({ numbers: this.state.numbers + 6 });

    render() {
      const { numbers, newests, isLoading } = this.state;

      return !isLoading || newests.length > 0 ? (
      <div className={cont}>
        {newests.slice(0, numbers).map((newest, key) => {
            return <Article key={newest.id} article={newest} />;
        })}
        { numbers < newests.length ? <button className={btn} onClick={this.moreItems} >Carregar mais notícias</button>: null }
      </div>
    ) : <p> Cerregando... </p>;
  }
}

export default Articles;
