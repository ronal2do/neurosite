import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Search from '../components/Search';

import teste from '../media/images/teste.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title="eventos" image={teste} />
        <Section color="white">
          <Search />
        </Section>
        <Section color="blue" nopadding >
          <Section color="#3b5999">

          </Section>
          <Section color="rgb(63, 67, 71)" image={teste}>

          </Section>
        </Section>
        <Section color="rgb(36, 40, 43)">
          aaa
        </Section>
      </div>
    );
  }
}

export default Home;
