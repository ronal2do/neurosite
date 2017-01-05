import React from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

import Sidebar from './Sidebar';
import LessonList from './LessonList';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: Globals.colors.gray,
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})


const categories = [
  {
    "_id": "586d398718490720d3fe93d6",
    "isActive": true,
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "title": "Carlene Britt",
    "body": "Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
    "registered": "2014-05-29T06:39:02 +03:00"
  },
  {
    "_id": "586d398717cfc653b7ebd606",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
    "title": "Knapp Morris",
    "body": "Aliquip amet amet velit ullamco duis consectetur excepteur culpa occaecat consectetur amet. Quis pariatur est velit fugiat aute pariatur aliquip laborum enim cupidatat amet officia ullamco. Id irure irure anim ex nisi velit dolor ad aliqua pariatur veniam nulla. Veniam magna mollit labore est aliqua fugiat dolore magna laborum fugiat amet id. Ad deserunt culpa nostrud incididunt quis amet esse sunt duis esse ad reprehenderit excepteur.\r\n",
    "registered": "2014-07-06T10:46:29 +03:00"
  },
  {
    "_id": "586d3987a2987b2007d5648c",
    "isActive": false,
    "image": "http://kingofwallpapers.com/imagem/imagem-004.jpg",
    "title": "Louise Potter",
    "body": "Cillum esse ad ad ipsum incididunt aliqua aute ad. Dolore voluptate ad nisi adipisicing reprehenderit. Commodo ipsum mollit est id ut amet ullamco officia. Reprehenderit occaecat aliquip deserunt culpa ea culpa enim est commodo officia ea nisi laboris occaecat. Laboris ad eiusmod sunt exercitation. Reprehenderit cillum ad sit anim in amet labore officia velit sit ea velit.\r\n",
    "registered": "2014-01-13T02:30:05 +02:00"
  },
  {
    "_id": "586d39874c55f64986a3defb",
    "isActive": false,
    "title": "Louise a",
    "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
    "body": "Amet dolore sint nulla anim eu ex do culpa non laborum aliquip officia ea. Nisi pariatur amet amet cupidatat aliquip cupidatat ipsum ullamco magna commodo ad eiusmod. Dolor proident sunt pariatur cupidatat exercitation fugiat. Magna sunt nisi amet labore ea. Anim nostrud qui ullamco qui magna id incididunt consequat deserunt occaecat consectetur cupidatat in. Voluptate officia sit dolor est. Nostrud voluptate cillum est consectetur deserunt labore sint adipisicing officia esse fugiat.\r\n",
    "registered": "2015-11-09T10:57:30 +02:00"
  }
]

const Lessons = () => {
  return (
    <div className={cont}>
      <Sidebar categories={categories}/>
      <LessonList lessons={categories}/>
    </div>
  );
}

export default Lessons;