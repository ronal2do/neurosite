import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  width: 'calc(50% - 10px)',
  border: 'none',
  marginBottom: 45,
  color: Globals.colors.gray,
  '@media (max-width: 767px)': {
    width: '100%',
  },
})

const Article = ({article}) => {
  return (
    <div className={cont}>
      <div>
        <img src={article.image} alt={article.title} width="100%" />
      </div>
      <div {...css({padding: '0 65px'})}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default Article;
