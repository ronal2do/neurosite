import React from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

const cont = css({
  width: 'calc(50% - 10px)',
  border: 'none',
  marginBottom: 45,
  cursor: 'pointer',
  textDecoration: 'none',
  '@media (max-width: 767px)': {
    width: '100%',
  },
  color: Globals.colors.gray,

})

const bd = css({
  padding: '45px 65px',
  '@media (max-width: 767px)': {
    padding: '15px 25px',
  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  color: 'black',
  textDecoration: 'none',
})

const p = css({
  fontFamily: Globals.fonts.primary,
  color: Globals.colors.gray,
  lineHeight: '1em',
  textDecoration: 'none',
})

const bg = css({
  width: 540,
  height: 360,
  maxWidth: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

const Article = ({article}) => {
  return (
    <a href={article.url} target="_blank" className={cont}>
      <div className={bg} {...style({backgroundImage: `url('${article.image}')`})}></div>
      <div className={bd} >
        <h1 className={h2}>{article.title}</h1>
        <p>{article.body.substr(0, 200)} ...</p>
        <p>Ler mais</p>
      </div>
    </a>
  );
}

export default Article;
