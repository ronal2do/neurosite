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
    // const fileID = '&resid=EF4DF2553A1EA2D2%213034';

    return (

      <div>
        <Banner title="contato" image={contato} />

        <Section color="white">
          <Divi title="fale" subTitle="conosco"/>
        </Section>
        <Section color="white">
          <div style={{flexDirection: 'column'}}>
            <p>Somos um portal de neurociência WWW.NEUROEDU.CO, local desenvolvido para os interessados em aprimorar seus conhecimentos em neurociências. Discutimos desde ciências básicas, incluindo neuroanatomia, neurofisiologia, neurologia clínica, neurocirurgia, clínica médica, patologia, e muitos artigos de revisão e novidades nas diversas áreas correlacionadas. Atualizaremos nosso portal de forma que você fique sempre com as últimas notícias sobre as pesquisas em neurociências. Não deixe de nos visitar diariamente, sempre haverá novidades para você, aproveite!
	</p><p>Deixe sua mensagem para nós, tire suas dúvidas, participe dos fóruns de bate-papo e assista nossas aulas ao vivo. </p>
<h3><i>contato@neuroedu.co</i></h3>
            {/* https://onedrive.live.com/download?cid=EF4DF2553A1EA2D2${fileID}&authkey=AL-6B4AeF66gQ1E <br/>
            <a href={`https://onedrive.live.com/download?cid=EF4DF2553A1EA2D2${fileID}&authkey=AL-6B4AeF66gQ1E`}>link  V</a> */}
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
