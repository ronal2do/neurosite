import React, { Component } from 'react';
import { css, style } from 'glamor';
import { IndexLink, Link } from 'react-router';

import Globals from '../utils/Globals';
import Logo from './Logo';

const nv = css({
  position: 'fixed',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '35px 0px',
  transition: 'all 200ms ease-in-out',
})

const cont = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1100px',
})

const ul = css({
  padding: 35,
  margin: 0,
  display: 'flex',
  listStyle: 'none',
})

const lk = css({
  padding: '0 15px',
  margin: 0,
  display: 'flex',
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',

  ':hover': {
    fontWeight: 'bold',
  }
})

const active = css({
    fontWeight: 'bold',
})

const Scrolled = css({
  padding: '0px',
  background: 'rgba(255,255,255,.975)',
  borderBottom: '1px solid #ebebeb',
  color: '#303030',
})

class Nav extends Component {
  state = {
    isToggleOn: false
  };

  componentDidMount = () => {
    global.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    global.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    const {isToggleOn} = this.state;
    if (global.scrollY > 280 && !isToggleOn) {
      this.setState({
        isToggleOn: true,
      });
    }
    else if (global.scrollY <= 280 && isToggleOn) {
      this.setState({
        isToggleOn: false,
      });
    }
  };

  render() {
    const {isToggleOn} = this.state;
    const test = isToggleOn ? Scrolled : null;
    const color = isToggleOn ? Globals.colors.logo2 : '#fff';

    return (
      <div className={`${nv} ${test}`}>
        <div className={cont}>

          <div>
            <Link to="/">
              { isToggleOn ?
                <Logo color={Globals.colors.logo} colorSec={Globals.colors.logo2} color3=""/> :
                <Logo color="#ffffff" colorSec="#ffffff" color3="#ffffff" />
              }
            </Link>
          </div>
          <ul className={ul}>
            <li><IndexLink className={lk} to="/" {...style({color: `${color}` })} activeClassName={active}>Home</IndexLink></li>
            <li><Link className={lk} to="portal" {...style({color: `${color}` })} activeClassName={active}>portal</Link></li>
            <li><Link className={lk} to="profissionais" {...style({color: `${color}` })} activeClassName={active}>profissionais</Link></li>
            <li><Link className={lk} to="forum" {...style({color: `${color}` })} activeClassName={active}>fórum</Link></li>
            <li><Link className={lk} to="eventos" {...style({color: `${color}` })} activeClassName={active}>eventos</Link></li>
            <li><Link className={lk} to="contato" {...style({color: `${color}` })} activeClassName={active}>contato</Link></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Nav;
