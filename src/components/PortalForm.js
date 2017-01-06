import React, { Component } from 'react';

import { css } from 'glamor';

import Globals from '../utils/Globals';
import Input from './form/Input';
import Submit from './form/Submit';

const cont = css({
  border: 'none',
  marginBottom: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  fontFamily: Globals.fonts.secundary,
  color: 'white',

  '@media (max-width: 767px)': {
    width: '100%',
  },
})

class PortalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      proffision: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    // Fetch form values.
    const formData = {
      name: this.state.name,
      email: this.state.email,
      proffision: this.state.proffision,
    };

    console.log(formData);
    // Send the form data.
    const xmlhttp = new XMLHttpRequest();
    //api address
    xmlhttp.open('POST', 'news', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(formData);
  }

  render() {
    return (
      <div className={cont}>
        <h1>Inscreva-se em nossa newsletter</h1>

        <form onSubmit={this.handleSubmit} {...css({maxWidth: '600px'})}>
          <Input type="text" placeholder="Nome" name="name" value={this.state.name} onChange={this.handleChange} half/>
          <Input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} half/>
          <Input type="text" placeholder="Profissão" name="proffision" value={this.state.proffision} onChange={this.handleChange}/>
          <Submit value="Enviar" color={this.props.color} />
        </form>
      </div>
    );
  }
}

export default PortalForm;
