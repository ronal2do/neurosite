import React, { Component } from 'react';
import Nav from './components/Nav';
import './media/styles/index.css';
import 'glamor/reset';

class App extends Component {

  render() {
    return (
      <div>
        <div id="top"></div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
