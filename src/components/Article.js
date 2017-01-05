import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  width: 'calc(50% - 10px)',
  border: 'none',
  marginBottom: 45,
  '@media (max-width: 767px)': {
    width: '100%',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  color: 'black',
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
})

const Article = ({article}) => {
  return (
    <div className={cont}>
      <div>
        <img src={article.image} alt={article.title} width="100%" />
      </div>
      <div {...css({padding: '45px 65px'})}>
        <h1 className={h2}>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    </div>
  );
}

export default Article;
