import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBjKYLi99bS9qfyb2jGD7hfZ6z46I8GYJM';

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

class Forum extends Component {
  state = {
    tema: 'Saúde neural',
    videos: []
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos
      });
      console.log(this.state.videos);
    });

  }

  componentDidMount() {
    this.videoSearch(this.state.tema);
  }

  render() {

    const {
      videos,
      tema
    } = this.state;

    return (
      <div>
        <Banner title="fórum" image={teste} />

        <Section color="white">
          <Divi title="Tema do mês" subTitle={tema}/>
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
              title="Tema do mês"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Totam accusamus odio culpa numquam recusandae explicabo
              soluta labore quaerat excepturi deleniti ipsa aut facere
              blanditiis, sit debitis, dolorem, quam? Quod, adipisci.
            </BoxText>
            <Section color="rgb(63, 67, 71)" image={teste}>

            </Section>
          </Container>
        </Section>

        <Section color="white">
          <Divi title="Discução sobre " subTitle={tema}/>
        </Section>

        <Footer color="#1e2326"/>
      </div>
    );
  }
}

export default Forum;
