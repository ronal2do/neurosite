import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';

import PeopleList from '../components/PeopleList';
import Footer from '../components/Footer';

import Globals from '../utils/Globals';

import teste from '../media/images/forum.png';

class Prosissionais extends Component {

  render() {
    return (
      <div>
        <Banner title="Prosissionais" image={teste} />
        <Section color={Globals.colors.green} ></Section>
        <PeopleList/>
        <Footer color="white"/>
      </div>
    );
  }
}

export default Prosissionais;
