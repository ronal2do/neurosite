import React, { Component } from 'react';

import Globals from '../utils/Globals';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Divi from '../components/Divi';
import Footer from '../components/Footer';
import PortalForm from '../components/PortalForm';

import contato from '../media/images/contato.png';
import newsletter from '../media/images/newsletter.png';

class Home extends Component {
  render() {
    const fileID = '&resid=EF4DF2553A1EA2D2%213034';

    return (

      <div>
        <Banner title="contato" image={contato} />

        <Section color="white">
          <Divi title="fale" subTitle="conosco"/>
        </Section>
        <Section color="white" nopadding>
          <div style={{flexDirection: 'column'}}>
            <p>Sujestões, critícas whatever...</p>
            <h1><i>oi@neuroedu.co</i></h1>
            https://onedrive.live.com/download?cid=EF4DF2553A1EA2D2${fileID}&authkey=AL-6B4AeF66gQ1E <br/>
            <a href={`https://onedrive.live.com/download?cid=EF4DF2553A1EA2D2${fileID}&authkey=AL-6B4AeF66gQ1E`}>link  V</a>
            <br/>
            <br/>
          </div>
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
