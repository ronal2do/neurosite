import React, { Component } from 'react';
import { css } from 'glamor';
import { Link } from 'react-router';

import Globals from '../utils/Globals';
import Logo from './Logo';

const nv = css({
  position: 'fixed',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const cont = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1100px',
  padding: '35px 15px',
})

const ul = css({
  padding: 15,
  margin: 0,
  display: 'flex',
  listStyle: 'none',
})

const lk = css({
  padding: '0 15px',
  margin: 0,
  display: 'flex',
  listStyle: 'none',
})

const Scrolled = css({
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
    if (global.scrollY > 350 && !isToggleOn) {
      this.setState({
        isToggleOn: true,
      });
    }
    else if (global.scrollY <= 350 && isToggleOn) {
      this.setState({
        isToggleOn: false,
      });
    }
  };

  render() {
    const {isToggleOn} = this.state;
    const test = isToggleOn ? Scrolled : null;
    const logoColor = isToggleOn ? Globals.colors.cyan : '#FFFFFF' ;

    return (
      <div className={`${nv} ${test}`}>
        <div className={cont}>

          <div><Link to="/"><Logo color={logoColor}/></Link></div>
          <ul className={ul}>
            <li><Link className={lk} to="/">Home</Link></li>
            <li><Link className={lk} to="portal">portal</Link></li>
            <li><Link className={lk} to="profissionais">profissionais</Link></li>
            <li><Link className={lk} to="forum">forum</Link></li>
            <li><Link className={lk} to="eventos">eventos</Link></li>
            <li><Link className={lk} to="contato">contato</Link></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Nav;
