import React, {Component} from 'react';
import { css, style } from 'glamor';
import Globals from '../utils/Globals';

import arrow from '../media/images/Arrow.svg';
import brodman from '../media/images/brodmann.png';
import sociais from '../media/images/sociais.png';

const sec = css({
  backgroundColor: Globals.colors.primary,
  width: '100%',
  height: 'calc(100vh - 150px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
});

const controller = css({
  backgroundColor: '#667ebe',
  position: 'absolute',
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 30,
});

class Hero extends Component {
  state = {
  	sliderIndex: 0,
  };

  nextStep = () => this.setState({ sliderIndex: this.state.sliderIndex + 1 });

  prevStep = () => this.setState({ sliderIndex: this.state.sliderIndex - 1 });

  componentDidMount() {
    const { sliderIndex } = this.state;

    if (sliderIndex > sliderIndex.length) {
      setTimeout(() => this.setState({sliderIndex: this.state.sliderIndex - 1}), 5000);
    }
    setTimeout(() => this.setState({sliderIndex: this.state.sliderIndex + 1}), 5000);

  }

  onDotClick (index) {
    this.setState({
      sliderIndex: index,
      lastSlide: this.state.sliderIndex
    })
  }

// Render
  render() {

    const sliders = [{
    	image: brodman,
    	text: 'Lorem Ipsum 1',
    }
    , {
    	image: sociais,
    	text: 'Lorem Ipsum 2',
    },{
    	image: brodman,
    	text: 'Lorem Ipsum 1',
    }
    , {
    	image: sociais,
    	text: 'Lorem Ipsum 2',
    }
  ];

    const { sliderIndex } = this.state;
    const MAX = sliders.length;

    return (
      <section
        className={sec}
        {...style({backgroundImage: `url(${sliders[sliderIndex].image})`} )}
      >
        { sliders.length > 0 ?
          <div className={controller}>

            {sliderIndex + 1 < MAX ?
            <span {...style({cursor: 'pointer'})} onClick={this.nextStep.bind(this)}>
               <img src={arrow} alt="Arrow" />
            </span> : <span style={{height: 20}}></span>}

            {sliderIndex >= 1 ?
            <span {...style({cursor: 'pointer', transform: 'rotate(180deg)'})} onClick={this.prevStep.bind(this)}>
              <img src={arrow} alt="Arrow" />
            </span> : <span style={{height: 20}}></span>}
          </div> : null
        }
      </section>
    );
  }
}

export default Hero;
