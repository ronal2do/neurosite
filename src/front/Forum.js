import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Divi from '../components/Divi';
import BoxText from '../components/BoxFacebook';
import Footer from '../components/Footer';

import Globals from '../utils/Globals';

import teste from '../media/images/forum.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title="fórum" image={teste} />
        <Section color="white">
          <Divi title="youtube" subTitle="canais"/>
        </Section>
        <Section color="white" >
          <Section color="#3b5999">
              <BoxText />
          </Section>
          <Section color="rgb(63, 67, 71)" image={teste}>

          </Section>
        </Section>
        
        <Section color="white">
          <Divi title="ao vivo" subTitle="eventos"/>
        </Section>
        <Section color="white" nopadding >
          <Section>
            <Section color={Globals.colors.green}>
                <BoxText />
            </Section>
            <Section color="rgb(63, 67, 71)" image={teste}>

            </Section>
          </Section>
        </Section>
        <Section color="rgb(36, 40, 43)">
          aaa
        </Section>
        <Footer color="#1e2326"/>
      </div>
    );
  }
}

export default Home;
