import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';
import lupa from '../media/images/lupa.svg';

const sec = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: Globals.colors.gray,
  fontFamily: Globals.fonts.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.5em',
  '@media (max-width: 767px)': {
    flexDirection: 'column'
  },
});

const inp = css({
  width: '100%',
  maxWidth: '1100px',
  padding: 15,
  border: 'none',
  color: Globals.colors.gray,
  fontSize: 18,
})

const lup = css({
  backgroundImage: `url(${lupa})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  width: 30,
  height: 30,
})

const h2 = css({
  paddingTop: 5,
  textTransform: 'uppercase',
  letterSpacing: 3,
  fontWeight: '100',
  fontSize: 20,
  whiteSpace: 'nowrap',
  '@media (max-width: 767px)': {
    whiteSpace: 'normal'
  },
})

const Search = () => {
  return (
    <form className={sec} action="https://www.ncbi.nlm.nih.gov/pubmed?" target="_blank">
      <h2 className={h2}>Pesquisar artigos</h2>
      <input type="search" placeholder="pubmed.gov" className={inp} name="term" required/>
      <input type="submit" className={lup} value="" />
    </form>
  );
}

export default Search
