import React, { Component } from 'react';

import Hero from '../components/Hero';
import Section from '../components/Section';
import Search from '../components/Search';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Section color="white">
          <Search />
        </Section>
        <Section color="white" nopadding>
          <Articles />
        </Section>
        <Footer color="white"/>
      </div>
    );
  }
}

export default Home;
