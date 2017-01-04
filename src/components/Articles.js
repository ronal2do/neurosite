import React from 'react';
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
  color: Globals.colors.gray,
})

const Articles = ({articles}) => {
  return (
    <div className={cont}>
      {articles.map((article, key) => {
          return <Article key={article._id} article={article} />;
      })}
      
      <button className={btn}>Carregar mais notícias</button>
    </div>
  );
}

export default Articles;
