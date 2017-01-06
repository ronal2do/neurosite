import React, { Component } from 'react';

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

const articles = [
  {
    "_id": "586d398718490720d3fe93d6",
    "isActive": true,
    "youtube": "bgVz5fJeI40",
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "title": "Carlene Britt",
    "body": "Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
    "registered": "2014-05-29T06:39:02 +03:00"
  },
  {
    "_id": "586d398717cfc653b7ebd606",
    "isActive": false,
    "youtube": "bgVz5fJeI40",
    "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
    "title": "Knapp Morris",
    "body": "Aliquip amet amet velit ullamco duis consectetur excepteur culpa occaecat consectetur amet. Quis pariatur est velit fugiat aute pariatur aliquip laborum enim cupidatat amet officia ullamco. Id irure irure anim ex nisi velit dolor ad aliqua pariatur veniam nulla. Veniam magna mollit labore est aliqua fugiat dolore magna laborum fugiat amet id. Ad deserunt culpa nostrud incididunt quis amet esse sunt duis esse ad reprehenderit excepteur.\r\n",
    "registered": "2014-07-06T10:46:29 +03:00"
  },
  {
    "_id": "586d3987a2987b2007d5648c",
    "isActive": false,
    "youtube": "bgVz5fJeI40",
    "image": "http://kingofwallpapers.com/imagem/imagem-004.jpg",
    "title": "Louise Potter",
    "body": "Cillum esse ad ad ipsum incididunt aliqua aute ad. Dolore voluptate ad nisi adipisicing reprehenderit. Commodo ipsum mollit est id ut amet ullamco officia. Reprehenderit occaecat aliquip deserunt culpa ea culpa enim est commodo officia ea nisi laboris occaecat. Laboris ad eiusmod sunt exercitation. Reprehenderit cillum ad sit anim in amet labore officia velit sit ea velit.\r\n",
    "registered": "2014-01-13T02:30:05 +02:00"
  },
  {
    "_id": "586d39874c55f64986a3defb",
    "isActive": false,
    "youtube": "bgVz5fJeI40",
    "title": "Louise a",
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "body": "Amet dolore sint nulla anim eu ex do culpa non laborum aliquip officia ea. Nisi pariatur amet amet cupidatat aliquip cupidatat ipsum ullamco magna commodo ad eiusmod. Dolor proident sunt pariatur cupidatat exercitation fugiat. Magna sunt nisi amet labore ea. Anim nostrud qui ullamco qui magna id incididunt consequat deserunt occaecat consectetur cupidatat in. Voluptate officia sit dolor est. Nostrud voluptate cillum est consectetur deserunt labore sint adipisicing officia esse fugiat.\r\n",
    "registered": "2015-11-09T10:57:30 +02:00"
  }
]

class Forum extends Component {

  render() {
    return (
      <div>
        <Banner title="fórum" image={teste} />
        <Section color="white">
          <Divi title="youtube" subTitle="canais"/>
        </Section>
        <Section color="white" nopadding>
          <Container>
            <VideoList videos={articles}/>

          </Container>
        </Section>
        <Section color="white">
          <Divi title="ao vivo" subTitle="eventos"/>
        </Section>
        <Section color={Globals.colors.green} nopadding>
          <Container>
            <BoxText
              color={Globals.colors.green}
              image={grid}
              title="Lorem ipsum dolor sit amet, consectetur adipisicing"
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

        <Section color="rgb(36, 40, 43)">
          event list
        </Section>
        <Footer color="#1e2326"/>
      </div>
    );
  }
}

export default Forum;
