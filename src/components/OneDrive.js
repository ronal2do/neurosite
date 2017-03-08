import React, {Component} from 'react';
import Globals from '../utils/Globals';

import { css } from 'glamor';

import Sidebar from './Sidebar';
import LessonList from './LessonList';

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

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
// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/drive-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart.json';

class Lessons extends Component {

  state = { categories: [], articles: [], category_id: '' }

  componentDidMount = () => {

  };

  render() {
    const { categories, articles, category_id } = this.state;

    return (
      <div className={cont}>
        <Sidebar categories={categories} onClick={this.onChange} />
        <LessonList lessons={articles} filter={category_id} />
      </div>
    );
  }
}

export default Lessons;
