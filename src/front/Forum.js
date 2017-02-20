import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBh3sFQt4oXLxIY6v2_LE-3-DuMKOsqTLM';

import Banner from '../components/Banner';
import Section from '../components/Section';
import Container from '../components/Container';
import Divi from '../components/Divi';
import BoxText from '../components/BoxText';
import VideoList from '../components/VideoList';
import Footer from '../components/Footer';

import Globals from '../utils/Globals';

import teste from '../media/images/forum.png';
import grid from '../media/images/grade.png';

const TEMA = 'AVC';

class Forum extends Component {
  state = {
    // tema: 'Saúde neural',
    videos: []
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos
      });
    });
  }

  componentDidMount() {
    this.videoSearch(TEMA);
  }

  render() {

    const {
      videos,
      // tema
    } = this.state;

    return (
      <div>
        <Banner title="fórum" image={teste} />

        <Section color="white">
          <Divi title="YOUTUBE" subTitle="canais"/>
        </Section>

        <Section color="white" nopadding>
          <Container>
            <VideoList videos={videos}/>
          </Container>
        </Section>

        <Section color={Globals.colors.green} nopadding>
          <Container>
            <BoxText
              color={Globals.colors.green}
              image={grid}
              title={`Tema do mês - ${TEMA}`}
              font="https://pt.wikipedia.org/wiki/Acidente_vascular_cerebral"
            >
            <p>
              O acidente vascular cerebral (sigla: AVC), vulgarmente chamado de derrame cerebral, é caracterizado pela perda rápida de função neurológica, decorrente do entupimento (isquemia) ou rompimento (hemorragia) de vasos sanguíneos cerebrais.
            </p>
            <p>
              É uma doença de início súbito na qual o paciente pode apresentar paralisação ou dificuldade de movimentação dos membros de um mesmo lado do corpo, dificuldade na fala ou articulação das palavras e défice visual súbito de uma parte do campo visual. Pode ainda evoluir com coma e outros sinais.
            </p>
            </BoxText>
            <Section color="rgb(63, 67, 71)" image={teste}>

            </Section>
          </Container>
        </Section>

        <Section color="white">
          <Divi title="TEMA DO MÊS" subTitle={TEMA}/>
        </Section>

        <Section color="white" nopadding>
          <Container>
            <VideoList videos={videos}/>
          </Container>
        </Section>

        <Section color="white">
          <Divi title="Discução sobre " subTitle={TEMA}/>
        </Section>

        <Footer color="#1e2326"/>
      </div>
    );
  }
}

export default Forum;
