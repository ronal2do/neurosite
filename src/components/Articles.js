import React, { Component } from 'react';
import Globals from '../utils/Globals';

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
    state = {
    	numbers: 4,
    }

    constructor(props){
    	super(props);

    	this.moreItems = this.moreItems.bind(this)
    }

    moreItems = () => this.setState({ numbers: this.state.numbers + 4 });

    render() {
      const { articles } = this.props;
      const { numbers } = this.state;
      const MAX = articles.length;

      return (
      <div className={cont}>
        {articles.slice(0, numbers).map((article, key) => {
            return <Article key={article._id} article={article} />;
        })}

        { numbers <= MAX ? <button className={btn} onClick={this.moreItems} >Carregar mais notícias</button>: null }
      </div>
    );
  }
}

export default Articles;
