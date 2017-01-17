import React, { Component } from 'react';
import Globals from '../utils/Globals';

import { css, style } from 'glamor';

import Section from './Section';
import People from './People';

import grid from '../media/images/grade.png';

const cont = css({
  width: '100%',
  maxWidth: '1100px',
  display: 'flex',

  flexDirection: 'column',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
})

const text = css({
  maxWidth: 450,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  color: 'white',
  textAlign: 'center',
})

const nll = css({
  border: 'none',
  padding: '0px 30px',
  marginBottom: 45,
  textAlign: 'center',
  width: '25%',
  maxWidth: '25%',

  '@media (max-width: 767px)': {
      display: 'none',
      width: '25%',
      maxWidth: '25%',
  },
})

const h1 = css({
  fontFamily: Globals.fonts.primary,
  fontWeight: '100',
  color: 'black',
  fontSize: '2.5em',
  letterSpacing: 12,
  textTransform: 'uppercase',
  '@media (max-width: 767px)': {

  },
})

const h2 = css({
  fontFamily: Globals.fonts.secundary,
  fontWeight: '100',
  color: 'white',
  fontSize: '2em',
  letterSpacing: 1,

  '@media (max-width: 767px)': {

  },
})

class PeopleList extends Component {
  state = {
  	peopleIndex: 0,
  }

  nextStep = () => this.setState({ peopleIndex: this.state.peopleIndex + 1 });

  prevStep = () => this.setState({ peopleIndex: this.state.peopleIndex - 1 });

  render() {

    const { peoples } = this.props;
    const { peopleIndex } = this.state;
    const MAX = peoples.length;

    return (
      <div>
        <Section color={Globals.colors.green} image={grid} nopadding >
          <div className={cont} >
            <h1 className={h1}>profis- <br/>sionais</h1>
            <h2 className={h2}>& idealizadores</h2>
            <div {...style({display: 'flex'})}>

               {peopleIndex >= 1 ?
                 <People
                   name={peoples[peopleIndex - 1].name}
                   image={peoples[peopleIndex - 1].image}
                   office={peoples[peopleIndex - 1].office}
                  /> : <div className={nll}></div>
               }

              <People
                name={peoples[peopleIndex].name}
                image={peoples[peopleIndex].image}
                office={peoples[peopleIndex].office}
                prevStep={this.prevStep.bind(this)}
                nextStep={this.nextStep.bind(this)}
                peopleIndex={peopleIndex}
                max={MAX}
                active
              />

              {peopleIndex + 1 < MAX ?
                <People
                  name={peoples[peopleIndex + 1].name}
                  image={peoples[peopleIndex + 1].image}
                  office={peoples[peopleIndex + 1].office}
                 /> : <div className={nll}></div>
              }

            </div>
          </div>
        </Section>
        <Section color="#1E2B31" nopadding>
          <div className={text}>
            <p>{peoples[peopleIndex].body}</p>
          </div>
        </Section>
      </div>
    );
  }
}

export default PeopleList;
