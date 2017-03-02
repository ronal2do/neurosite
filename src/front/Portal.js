import React, { Component } from 'react';

import Globals from '../utils/Globals';

import Banner from '../components/Banner';
import Section from '../components/Section';
// import Container from '../components/Container';
import Search from '../components/Search';
// import VideoFeature from '../components/VideoFeature';
import ChannelFeature from '../components/ChannelFeature';
import Lessons from '../components/Lessons';
// import BoxFacebook from '../components/BoxFacebook';
// import BoxYoutube from '../components/BoxYoutube';
import PortalForm from '../components/PortalForm';
import Footer from '../components/Footer';

import portal from '../media/images/portal.png';
// const transmission = 'ylXShcoF0xA';
// import transmission from '../media/images/transmission.png';
import inscrevase from '../media/images/inscrevase.png';

class Portal extends Component {
  render() {
    return (
      <div>
        <Banner title="portal" image={portal} />
        <Section color="white">
          <Search />
        </Section>

        {/* <Section color="#3b5999" nopadding>
          <Container>
            <BoxFacebook />
            <Section color="rgb(63, 67, 71)"
              image={`//img.youtube.com/vi/${transmission}/sddefault.jpg`}
              >
            <BoxYoutube link={`https://www.youtube.com/watch?v=${transmission}`}/>
            </Section>
          </Container>
        </Section> */}

        <Section color="#1e2325">
          <ChannelFeature />
        </Section>

        <Section color="white">
          <Lessons />
        </Section>

        <Section color="white" image={inscrevase}>
          <PortalForm color={Globals.colors.green}/>
        </Section>

        <Footer color="#1e2326"/>

      </div>
    );
  }
}

export default Portal;
