import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  height: 'calc(100% - 60px)',
  maxWidth: '250px',
  display: 'flex',
  alignItems: 'flex-end',
  borderRight: '1px solid #e7e7e7',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  color: Globals.colors.gray,
  padding: 30,

  '@media (max-width: 767px)': {
    flexDirection: 'row',
    border: 'none',
  },
})

const arti = css({
  padding: '5px 0px',
  textDecoration: 'none',
  color: Globals.colors.gray,
  transition: 'color 300ms linear',
  ':hover' : {
    color: 'black',
  }
})


const Sidebar = ({categories}) => {
  return (
    <div className={cont}>
      <h1>Artigos</h1>
        {categories.map((categorie, key) => {
            return <a href key={categorie.id} className={arti}>#{categorie.title}</a>;
        })}
    </div>
  );
}

export default Sidebar;
