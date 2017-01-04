import React from 'react';

import { css, style } from 'glamor';

const sec = css({
  width: '100%',
  paddingTop: '50px',
  paddingBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  padding: 15,
  display: 'flex',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const np = css({
  display: 'flex',
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundPosition: 'center',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const Section = ({children, color, name, nopadding, image}) => {
  return nopadding ? (
    <section className={np} {...style({backgroundColor: `${color}`, backgroundImage: `url(${image})`} )} id={name}>
        {children}
    </section>
  ) : (
    <section className={sec} {...style({backgroundColor: `${color}`, backgroundImage: `url(${image})`} )} id={name}>
      <div className={cont}>
        {children}
      </div>
    </section>
  );
}

export default Section
