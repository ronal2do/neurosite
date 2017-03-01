import React, { Component } from 'react';
import Nav from './components/Nav';
// import 'glamor/reset';
import './media/styles/index.css';

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
