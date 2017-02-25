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
  zIndex: '1111',
  flexDirection: 'column',
})

const mob = css({
  display: 'flex',
  padding: '10px',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (min-width: 767px)': {
    display: 'none',
  },
})

const mobs = css({
  listStyle: 'none',
  lineHeight: 2,
  '@media (min-width: 767px)': {
    display: 'none',
  },
})

const men = css({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100vw',
  background: 'rgba(255,255,255,.975)',
  height: 'calc(100vh - 50px)',
  '@media (max-width: 767px)': {

  },
})

const cont = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1100px',
  '@media (max-width: 767px)': {
    display: 'none',
  },
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
    // fontWeight: 'bold',
    color: Globals.colors.green,

  }
})

const Scrolled = css({
  padding: '0px',
  background: 'rgba(255,255,255,.975)',
  borderBottom: '1px solid #ebebeb',
  color: '#303030',
})

class Nav extends Component {
  state = {
    isToggleOn: false,
    sidebarOpen: false,
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

  handleMenu = () => {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen
    }));
  }

  render() {
    const {
      isToggleOn,
      sidebarOpen
    } = this.state;
    const test = isToggleOn ? Scrolled : null;
    const color = isToggleOn ? Globals.colors.logo2 : '#fff';
    const menu = sidebarOpen ? 'menu-button push' : 'menu-button';

    return (
      <div {...css(nv, test)}>
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
            <li><IndexLink className={lk} to="/" {...style({color: `${color}` })} activeClassName="active">Home</IndexLink></li>
            <li><Link className={lk} to="portal" {...style({color: `${color}` })} activeClassName="active">portal</Link></li>
            <li><Link className={lk} to="profissionais" {...style({color: `${color}` })} activeClassName="active">profissionais</Link></li>
            <li><Link className={lk} to="forum" {...style({color: `${color}` })} activeClassName="active">fórum</Link></li>
            <li><Link className={lk} to="eventos" {...style({color: `${color}` })} activeClassName="active">eventos</Link></li>
            <li><Link className={lk} to="contato" {...style({color: `${color}` })} activeClassName="active">contato</Link></li>
          </ul>

        </div>

        <div className={mob}>
          <Link to="/">
            { isToggleOn ?
              <Logo color={Globals.colors.logo} colorSec={Globals.colors.logo2} color3=""/> :
              <Logo color="#ffffff" colorSec="#ffffff" color3="#ffffff" />
            }
          </Link>
          <div className={menu} onClick={this.handleMenu} >
            <span className="before"></span>
            <span className="main"></span>
            <span className="after"></span>
          </div>
        </div>

        {sidebarOpen ?
          <div className={men}>
            <ul className={mobs}>
              <li><IndexLink className={lk} to="/" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>Home</IndexLink></li>
              <li><Link className={lk} to="portal" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>portal</Link></li>
              <li><Link className={lk} to="profissionais" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>profissionais</Link></li>
              <li><Link className={lk} to="forum" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>fórum</Link></li>
              <li><Link className={lk} to="eventos" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>eventos</Link></li>
              <li><Link className={lk} to="contato" {...style({color: `${Globals.colors.logo2}` })} activeClassName="active" onClick={this.handleMenu}>contato</Link></li>
            </ul>
          </div> :  null
        }

      </div>
    );
  }
}

export default Nav;
