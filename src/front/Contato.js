import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Divi from '../components/Divi';
import Footer from '../components/Footer';

import contato from '../media/images/contato.png';
import newsletter from '../media/images/newsletter.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title="contato" image={contato} />
        <Section color="white">
          <Divi  title="Eventos" subTitle="Acontecendo agora"/>
        </Section>
        <Section color="blue" nopadding >
          <Section color="white">
            Eventos
          </Section>
          <Section color="white">
              Eventos
          </Section>
        </Section>
        <Section color="white">
          <Divi  title="na nossa" subTitle="newsletter"/>
        </Section>
        <Section color="white">
          lista de news
        </Section>
        <Section color="rgb(63, 67, 71)" image={newsletter}>
          <h1>Receba a nossa newsletter</h1>
          <div>form da newsletter</div>
        </Section>
        <Footer color="#1e2325" contact/>
      </div>
    );
  }
}

export default Home;
