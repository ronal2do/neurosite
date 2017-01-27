import React, { Component } from 'react';

import Globals from '../utils/Globals';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Container from '../components/Container';
import Divi from '../components/Divi';
import Footer from '../components/Footer';
import PortalForm from '../components/PortalForm';

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
        <Section color="white" nopadding >
          <Container>
            <Section color="white">
              Nenhum evento no momento
            </Section>
            <Section color="white">
                
            </Section>
          </Container>
        </Section>
        <Section color="white">
          <Divi  title="fale" subTitle="conosco"/>
        </Section>
        <Section color="white">
          dados de contato
        </Section>
        <Section color="rgb(63, 67, 71)" image={newsletter}>
          <PortalForm color={Globals.colors.green}/>
        </Section>

        <Footer color="#1e2325" contact/>
      </div>
    );
  }
}

export default Home;
