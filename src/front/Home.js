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
        {/* <Section color="white">
          Bem-vindos ao portal da neurociência WWW.NEUROEDU.CO, local
desenvolvido para os interessados em aprimorar seus conhecimentos em
neurociências. Discutimos desde ciências básicas, incluindo neuroanatomia,
neurofisiologia, neurologia clínica, neurocirurgia, clínica médica, patologia, e
muitos artigos de revisão e novidades nas diversas áreas correlacionadas.

Atualizaremos nosso portal de forma que você fique sempre com as últimas
notícias sobre as pesquisas em neurociências. Não deixe de nos visitar
diariamente, sempre haverá novidades para você, aproveite!

Deixe sua mensagem para nós, tire suas dúvidas, participe dos fóruns de
bate-papo e assista nossas aulas ao vivo.
        </Section> */}
        <Section color="white" nopadding>
          <Articles />
        </Section>
        <Footer color="white"/>
      </div>
    );
  }
}

export default Home;
