import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const sec = css({
  width: '100%',
  maxWidth: '1100px',
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const inp = css({
  width: '100%',
  maxWidth: '1100px',
  padding: 15,
  border: 'none',
  color: Globals.colors.gray,
})

const Search = () => {
  return (
    <form className={sec} action="https://www.ncbi.nlm.nih.gov/pubmed?" target="_blank">
      <h2 {...css({whiteSpace: 'nowrap'})}>Pesquisar artigos</h2>
      <input type="search" placeholder="pubmed.gov" className={inp} name="term" required/>
      <input type="submit" value="🔍"/>
    </form>
  );
}

export default Search
