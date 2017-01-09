import React from 'react';

import { css } from 'glamor';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',
   justifyContent: 'center',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const Container = ({children}) => {
  return (
    <div className={cont}>
      {children}
    </div>
  );
}

export default Container;
