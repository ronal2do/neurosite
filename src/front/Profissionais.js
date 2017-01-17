import React, { Component } from 'react';

import Banner from '../components/Banner';
import Section from '../components/Section';

import PeopleList from '../components/PeopleList';
import Footer from '../components/Footer';

import Globals from '../utils/Globals';

import teste from '../media/images/forum.png';

const profissionais = [
  {
    "_id": "586d398718490720d3fe93d6",
    "isActive": true,
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "name": "Carlene Britt",
    "office": "Carlene Profissão ",
    "body": "Carlene Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d398717cfc653b7ebd606",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
    "name": "Knapp Morris",
    "office": "Knapp Profissão ",
    "body": "Knapp Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d3987a2987b2007d5648c",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-004.jpg",
    "name": "Louise Potter",
    "office": "Louise Profissão ",
    "body": "Louise Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d39874c55f64986a3defb",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "name": "Louise a",
    "office": "Louise 2Profissão ",
    "body": "Louise Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d398718490720d3fe93d6",
    "isActive": true,
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "name": "Carlene Britt",
    "office": "Carlene Profissão ",
    "body": "Carlene Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d398717cfc653b7ebd606",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
    "name": "Knapp Morris",
    "office": "Knapp Profissão ",
    "body": "Knapp Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d3987a2987b2007d5648c",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-004.jpg",
    "name": "Louise Potter",
    "office": "Louise Profissão ",
    "body": "Louise Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  },
  {
    "_id": "586d39874c55f64986a3defb",
    "isActive": false,
    "name": "Louise a",
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "office": "Louise Profissão ",
    "body": "Louise Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
  }
]

class Prosissionais extends Component {

  render() {
    return (
      <div>
        <Banner title="Prosissionais" image={teste} />
        <Section color={Globals.colors.green} ></Section>

        <PeopleList peoples={profissionais}/>

        <Footer color="white"/>
      </div>
    );
  }
}

export default Prosissionais;
