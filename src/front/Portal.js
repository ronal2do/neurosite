import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Container from '../components/Container';
import Search from '../components/Search';
import VideoFeature from '../components/VideoFeature';
import Lessons from '../components/Lessons';
import BoxFacebook from '../components/BoxFacebook';
import BoxYoutube from '../components/BoxYoutube';
import Footer from '../components/Footer';

import portal from '../media/images/portal.png';
import transmission from '../media/images/transmission.png';
import inscrevase from '../media/images/inscrevase.png';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner title="portal" image={portal} />
        <Section color="white">
          <Search />
        </Section>

        <Section color="#3b5999" nopadding>
          <Container>
            <Section color="#3b5999" >
              <BoxFacebook />
            </Section>
            <Section color="rgb(63, 67, 71)" image={transmission}>
              <BoxYoutube />
            </Section>
          </Container>
        </Section>

        <Section color="#1e2325">
          <VideoFeature />
        </Section>

        <Section color="white">
          <Lessons />
        </Section>

        <Section color="white" image={inscrevase}>
          <div>form</div>
        </Section>

        <Footer color="#1e2326"/>

      </div>
    );
  }
}

export default Home;
