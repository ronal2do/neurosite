/* eslint-disable */
import React, { Component } from 'react';
// import crawlerjs from 'crawler-js';

import cheerio from 'cheerio';
import axios from 'axios';


// const articles = [
//   {
//     "_id": "586d39877212d6cd1a4ec482",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Briana Powers",
//     "body": "Irure minim incididunt irure laboris quis in sunt adipisicing aute excepteur aliquip fugiat deserunt. Consequat pariatur ipsum non enim ex exercitation Lorem. Ex ipsum in do nostrud excepteur nisi deserunt aliquip mollit.\r\n",
//     "registered": "2015-03-24T09:27:40 +03:00"
//   },
//   {
//     "_id": "586d39878f0249ce04f22bea",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Gay Guzman",
//     "body": "Occaecat non incididunt est incididunt non dolore consequat mollit. Do est irure eiusmod sint cupidatat ullamco do. Esse nulla officia velit ea ullamco. Adipisicing eiusmod elit exercitation anim fugiat reprehenderit ullamco. Exercitation in reprehenderit irure commodo.\r\n",
//     "registered": "2016-09-03T06:54:48 +03:00"
//   },
//   {
//     "_id": "586d39874b198335d7948b53",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Kaye Morgan",
//     "body": "Proident exercitation quis occaecat eiusmod. Pariatur non aute cillum excepteur cupidatat nostrud eiusmod laboris sint in eiusmod anim enim tempor. Aliqua deserunt nulla et laborum ea.\r\n",
//     "registered": "2016-04-23T04:23:35 +03:00"
//   },
//   {
//     "_id": "586d39873ae34e047d49bb8c",
//     "isActive": true,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Robbie Summers",
//     "body": "Dolore deserunt aliquip eiusmod aliquip minim qui occaecat occaecat eiusmod veniam minim cillum est nulla. Ullamco ullamco dolor eu labore duis velit exercitation non consectetur. Consectetur nostrud non pariatur aliquip. Nostrud quis consequat laborum dolor culpa eiusmod irure dolore do. Laborum eiusmod duis duis aliqua aute laboris in cupidatat dolore et commodo. Eu excepteur duis dolor labore dolore aliquip officia velit Lorem sint.\r\n",
//     "registered": "2016-12-22T05:55:42 +02:00"
//   },
//   {
//     "_id": "586d39878ab1a4334246d372",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-06.jpg",
//     "title": "Newton Hartman",
//     "body": "Cillum adipisicing cupidatat consequat ad do magna laborum incididunt aliqua sunt reprehenderit. Mollit nostrud dolor aute ad sunt nulla cupidatat veniam consectetur non nisi excepteur magna ad. Reprehenderit nostrud fugiat irure quis deserunt amet.\r\n",
//     "registered": "2015-09-14T01:39:47 +03:00"
//   },
//   {
//     "_id": "586d398718490720d3fe93d6",
//     "isActive": true,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Carlene Britt",
//     "body": "Mollit excepteur sint ullamco adipisicing est. Ipsum est nostrud eu minim occaecat non ea incididunt veniam nostrud dolor fugiat aliquip. Reprehenderit ipsum reprehenderit nisi mollit qui ullamco eu elit irure esse et. Eiusmod pariatur aliquip voluptate proident nulla in voluptate est laborum officia labore. Ad labore sint cillum irure fugiat dolore ea.\r\n",
//     "registered": "2014-05-29T06:39:02 +03:00"
//   },
//   {
//     "_id": "586d3987af67dddb83a33ef1",
//     "isActive": true,
//     "image": "http://kingofwallpapers.com/imagem/imagem-008.jpg",
//     "title": "Krystal Barker",
//     "body": "Incididunt commodo aliqua nisi officia culpa eu eu nisi quis dolore ullamco eu. Quis tempor magna id id cupidatat commodo occaecat excepteur qui minim. Laboris consectetur quis mollit anim in fugiat nostrud aliqua laborum incididunt. Reprehenderit cillum irure irure tempor magna qui dolore occaecat magna nulla ex officia.\r\n",
//     "registered": "2015-06-28T07:18:36 +03:00"
//   },
//   {
//     "_id": "586d39875055eb28c551421e",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Dolly Sims",
//     "body": "Minim reprehenderit voluptate consectetur tempor aliqua id eu proident minim nisi voluptate. Nostrud adipisicing dolore exercitation ad eu veniam aliquip cupidatat exercitation. Occaecat qui ipsum veniam laboris. Ipsum nulla tempor quis in eu elit adipisicing dolor ut eu veniam Lorem consectetur. Culpa culpa veniam occaecat commodo eu minim irure.\r\n",
//     "registered": "2016-09-18T08:50:22 +03:00"
//   },
//   {
//     "_id": "586d398753034c1372beeed1",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
//     "title": "White Goodman",
//     "body": "Ullamco ea quis voluptate ut aliquip velit consectetur labore cillum ut laborum. Laboris mollit sit labore eiusmod magna anim voluptate exercitation enim. Ea duis nostrud qui sunt occaecat fugiat ut mollit. Cillum nisi tempor commodo anim ut elit enim ea occaecat sit laboris nisi.\r\n",
//     "registered": "2014-04-24T07:59:10 +03:00"
//   },
//   {
//     "_id": "586d3987c159cd4bc5caa71a",
//     "isActive": true,
//     "image": "http://kingofwallpapers.com/imagem/imagem-002.jpg",
//     "title": "Short Lucas",
//     "body": "Mollit dolore et aliquip occaecat eiusmod elit nostrud aliquip deserunt veniam consequat. Esse excepteur ipsum consequat nisi id cillum magna deserunt irure veniam ex ipsum. Cillum officia culpa ipsum labore ullamco deserunt mollit veniam excepteur incididunt exercitation in nulla id. Nisi aliquip qui do cillum eiusmod nisi amet id ipsum id sunt veniam irure laborum. Proident dolor qui elit ea et elit. In dolore incididunt nulla cupidatat anim mollit exercitation.\r\n",
//     "registered": "2015-09-28T12:11:20 +03:00"
//   },
//   {
//     "_id": "586d3987fc3276cccaccec4a",
//     "isActive": true,
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "title": "Katelyn Pittman",
//     "body": "Aliqua nostrud sint reprehenderit ullamco exercitation labore irure. Est cupidatat incididunt amet culpa consectetur proident aliqua. Tempor officia minim culpa magna qui ut occaecat mollit ea. Eiusmod id id ad occaecat pariatur adipisicing qui aliqua fugiat eiusmod irure veniam.\r\n",
//     "registered": "2016-08-05T06:24:55 +03:00"
//   },
//   {
//     "_id": "586d398717cfc653b7ebd606",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-007.jpg",
//     "title": "Knapp Morris",
//     "body": "Aliquip amet amet velit ullamco duis consectetur excepteur culpa occaecat consectetur amet. Quis pariatur est velit fugiat aute pariatur aliquip laborum enim cupidatat amet officia ullamco. Id irure irure anim ex nisi velit dolor ad aliqua pariatur veniam nulla. Veniam magna mollit labore est aliqua fugiat dolore magna laborum fugiat amet id. Ad deserunt culpa nostrud incididunt quis amet esse sunt duis esse ad reprehenderit excepteur.\r\n",
//     "registered": "2014-07-06T10:46:29 +03:00"
//   },
//   {
//     "_id": "586d3987a2987b2007d5648c",
//     "isActive": false,
//     "image": "http://kingofwallpapers.com/imagem/imagem-004.jpg",
//     "title": "Louise Potter",
//     "body": "Cillum esse ad ad ipsum incididunt aliqua aute ad. Dolore voluptate ad nisi adipisicing reprehenderit. Commodo ipsum mollit est id ut amet ullamco officia. Reprehenderit occaecat aliquip deserunt culpa ea culpa enim est commodo officia ea nisi laboris occaecat. Laboris ad eiusmod sunt exercitation. Reprehenderit cillum ad sit anim in amet labore officia velit sit ea velit.\r\n",
//     "registered": "2014-01-13T02:30:05 +02:00"
//   },
//   {
//     "_id": "586d39874c55f64986a3defb",
//     "isActive": false,
//     "title": "Louise a",
//     "image": "http://kingofwallpapers.com/imagem/imagem-005.jpg",
//     "body": "Amet dolore sint nulla anim eu ex do culpa non laborum aliquip officia ea. Nisi pariatur amet amet cupidatat aliquip cupidatat ipsum ullamco magna commodo ad eiusmod. Dolor proident sunt pariatur cupidatat exercitation fugiat. Magna sunt nisi amet labore ea. Anim nostrud qui ullamco qui magna id incididunt consequat deserunt occaecat consectetur cupidatat in. Voluptate officia sit dolor est. Nostrud voluptate cillum est consectetur deserunt labore sint adipisicing officia esse fugiat.\r\n",
//     "registered": "2015-11-09T10:57:30 +02:00"
//   }
// ]
//

class Crawler extends Component {
//https://scotch.io/tutorials/scraping-the-web-with-node-js
  componentDidMount() {

    const url = 'http://www.imdb.com/title/tt1229340/';

    axios.get(url, function(error, response, html){
      if(!error){
        var $ = cheerio.load(html);

        var title, release, rating;
        var json = { title : "", release : "", rating : ""};

        $('.title_wrapper').filter(function(){
          var data = $(this);
          title = data.children().first().text().trim();
          release = data.children().last().children().last().text().trim();

          json.title = title;
          json.release = release;
        })

        $('.ratingValue').filter(function(){
          var data = $(this);
          rating = data.text().trim();

          json.rating = rating;
        })
      }

    })

  }

  render() {
    return (
      <div>
        crawler
      </div>
    );
  }
}

export default Crawler;
