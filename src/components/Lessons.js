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
      "_id": "587e57dc39d1d4eb222f2c46",
      "title": "Sunt est sint anim mollit sunt occaecat.",
      "isActive": true,
      "image": "http://placehold.it/32x32",
      "name": "Gay Workman",
      "body": "Labore esse sunt aute voluptate reprehenderit. Magna non aliquip aliquip elit cupidatat laboris. Ullamco officia do cupidatat quis aliquip laboris exercitation aliqua ex ad ad.\r\n",
      "createdAt": "2017-01-14T10:51:48"
    },
    {
      "_id": "587e57dcb57d4c6260cc77cd",
      "title": "Est officia adipisicing ullamco ex pariatur nisi Lorem eiusmod fugiat eu sit ex ad.",
      "isActive": true,
      "image": "http://placehold.it/32x32",
      "name": "Peggy Colon",
      "body": "Irure deserunt adipisicing sint cillum eiusmod mollit ea velit. Ut reprehenderit excepteur voluptate aliqua adipisicing nostrud aute pariatur est fugiat culpa non. Culpa proident occaecat consequat deserunt do magna voluptate. Enim nulla ex reprehenderit esse minim quis nisi. Minim ipsum culpa enim eiusmod sit aliquip mollit aliquip commodo do est voluptate incididunt occaecat. Magna ex deserunt veniam mollit amet eu sunt irure est laboris pariatur deserunt minim. Et enim sit ut est qui consequat aliquip consequat officia dolor nisi fugiat.\r\n",
      "createdAt": "2017-01-02T08:22:13"
    },
    {
      "_id": "587e57dc0996a2f9a6277e1b",
      "title": "Ad consectetur eiusmod est qui officia est enim in ut ad eu incididunt laborum incididunt.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Lucille Moreno",
      "body": "Nostrud sunt id sint velit excepteur est. Aute cillum adipisicing labore aliquip est nulla velit do consectetur laboris culpa ex magna id. Exercitation nulla anim proident qui velit sunt.\r\n",
      "createdAt": "2017-01-09T12:34:49"
    },
    {
      "_id": "587e57dc772d56bcbe5118e1",
      "title": "Dolore nostrud incididunt eiusmod adipisicing do.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Gallegos Vang",
      "body": "Pariatur irure non excepteur cillum id veniam mollit officia. Ullamco culpa sunt aute sint eiusmod consectetur ullamco aute et aute. Ex reprehenderit sunt dolore adipisicing est. Laborum elit cillum ullamco excepteur aliqua incididunt incididunt commodo duis laboris ad sunt eiusmod non. Ad proident cupidatat labore magna nisi sunt exercitation. Enim elit aliqua irure officia ipsum est nisi non officia.\r\n",
      "createdAt": "2017-01-01T09:08:50"
    },
    {
      "_id": "587e57dc0541b27ba0b20317",
      "title": "Exercitation velit non consectetur sint sit ea commodo deserunt irure ipsum.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Keri Mcconnell",
      "body": "Exercitation amet duis qui ad dolore proident. Do officia sunt aliqua nostrud commodo occaecat dolore dolor proident occaecat eu nulla qui. Proident ex fugiat nostrud magna adipisicing veniam in velit ullamco ad aute. Irure deserunt irure voluptate sint velit in id anim nisi cillum ea commodo dolore proident. Do qui non id qui mollit cillum in sit cupidatat minim. Enim aliquip occaecat ut pariatur duis sit nulla anim excepteur irure Lorem ullamco sunt.\r\n",
      "createdAt": "2017-01-02T06:43:38"
    },
    {
      "_id": "587e57dcaf7d9cb5565882dd",
      "title": "Laborum sit velit anim mollit cupidatat magna magna cillum nulla reprehenderit laboris irure tempor.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Boyle Mathews",
      "body": "Nisi laborum anim ea veniam aliqua nostrud do deserunt do fugiat eu adipisicing nostrud sint. Culpa et qui velit irure elit eu proident sint. Amet elit cupidatat occaecat officia. Fugiat ad eu reprehenderit magna laboris deserunt exercitation aute Lorem consectetur cupidatat consectetur laboris. Irure pariatur pariatur cillum ullamco ad pariatur elit laborum. Nulla reprehenderit mollit id nulla.\r\n",
      "createdAt": "2017-01-04T08:49:04"
    },
    {
      "_id": "587e57dc6d422d5c4858a30b",
      "title": "Velit incididunt excepteur labore est cillum nulla occaecat anim.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Nona Daniels",
      "body": "Magna tempor mollit sit occaecat. Qui culpa magna ullamco laboris ex cupidatat. Lorem eu consectetur laborum elit elit qui sint Lorem pariatur. Commodo laboris et sit laboris.\r\n",
      "createdAt": "2017-01-13T10:45:32"
    },
    {
      "_id": "587e57dcc8af536662f41902",
      "title": "Ad sunt dolore ad id aliquip Lorem occaecat.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Sampson Willis",
      "body": "Occaecat labore cillum officia do excepteur sit sint enim non laborum exercitation dolor qui. Sit minim nostrud voluptate exercitation tempor ea nisi. Anim in consequat ex reprehenderit elit enim commodo eu commodo ea magna amet. Do officia tempor adipisicing quis laborum fugiat quis culpa dolor nulla eu minim. Proident duis aute dolore et sunt officia mollit eu cupidatat.\r\n",
      "createdAt": "2017-01-01T01:39:39"
    },
    {
      "_id": "587e57dc61f2485a0b41c5ec",
      "title": "Nostrud nulla non nostrud ullamco duis et ea reprehenderit ex esse nisi mollit proident.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Sanchez Turner",
      "body": "Nisi nulla aliqua sit deserunt excepteur pariatur reprehenderit qui in pariatur quis. Consectetur dolor magna sunt sunt ut cillum excepteur adipisicing. Tempor voluptate culpa nisi est consectetur anim cillum consectetur dolor et. Nisi ea ut officia mollit mollit aliquip sint qui commodo. Anim minim in sunt aute cupidatat magna voluptate nostrud qui mollit.\r\n",
      "createdAt": "2017-01-03T12:31:43"
    },
    {
      "_id": "587e57dc94926c0be00964bd",
      "title": "Elit ipsum veniam minim ut aute elit velit deserunt ullamco.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Wall Mccormick",
      "body": "Incididunt reprehenderit qui non occaecat reprehenderit officia cupidatat Lorem fugiat commodo reprehenderit voluptate mollit proident. Reprehenderit ipsum esse dolor adipisicing amet qui minim irure ullamco Lorem aute. Duis Lorem sit nostrud nisi Lorem laboris reprehenderit ut exercitation. Cupidatat velit ut aute culpa in adipisicing anim Lorem nulla ad nostrud excepteur aliqua.\r\n",
      "createdAt": "2017-01-05T10:33:43"
    },
    {
      "_id": "587e57dc2ce7f3ec07773426",
      "title": "Eiusmod cillum dolor incididunt nostrud minim est consectetur anim veniam et officia.",
      "isActive": true,
      "image": "http://placehold.it/32x32",
      "name": "Cooke Paul",
      "body": "Duis quis deserunt voluptate magna magna non cillum veniam magna quis tempor irure consectetur tempor. Adipisicing id ullamco enim incididunt. Excepteur anim incididunt Lorem pariatur proident ex ipsum sunt. Reprehenderit ullamco ex nostrud laboris occaecat enim. Veniam dolore officia amet dolore sit fugiat laborum reprehenderit elit nostrud officia consequat mollit ex.\r\n",
      "createdAt": "2017-01-15T03:25:19"
    },
    {
      "_id": "587e57dc60d2727ad47b727a",
      "title": "Enim elit fugiat tempor aute duis reprehenderit ipsum do id.",
      "isActive": false,
      "image": "http://placehold.it/32x32",
      "name": "Mcdonald Oliver",
      "body": "Do non tempor exercitation consequat laborum eiusmod quis ipsum. Excepteur reprehenderit esse consequat ea pariatur excepteur esse occaecat cillum sint culpa excepteur voluptate proident. Non aliqua consequat laboris pariatur Lorem. Commodo sint pariatur irure minim culpa consequat eu sunt enim. Ad culpa deserunt cupidatat enim proident. Irure mollit excepteur irure magna et labore aute. Esse incididunt ex fugiat exercitation tempor aliqua eiusmod laboris fugiat anim.\r\n",
      "createdAt": "2017-01-03T08:16:38"
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
