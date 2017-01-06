import React, { Component } from 'react';

import { css } from 'glamor';

import Input from './form/Input';
import TextA from './form/TextA';
import Submit from './form/Submit';

const cont = css({
  border: 'none',
  marginTop: 45,
  marginBottom: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  '@media (max-width: 767px)': {
    width: '100%',
  },
})

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      city: '',
      theme: '',
      message: '',
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
      message: this.state.message,
      city: this.state.city,
      email: this.state.email,
      theme: this.state.theme,
    };

    console.log(formData);
    // Send the form data.
    const xmlhttp = new XMLHttpRequest();
    //api address
    xmlhttp.open('POST', 'send', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(formData);
  }

  render() {
    return (
      <div className={cont}>
        <form onSubmit={this.handleSubmit} {...css({maxWidth: '600px'})}>
          <Input type="text" placeholder="Nome" name="name" value={this.state.name} onChange={this.handleChange} half/>
          <Input type="text" placeholder="Cidade" name="city" value={this.state.city} onChange={this.handleChange} half/>
          <Input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <Input type="text" placeholder="Tema" name="theme" value={this.state.theme} onChange={this.handleChange}/>
          <TextA placeholder="Descritivo" rows="3" name="message" value={this.state.message} onChange={this.handleChange}/><br/>
          <Submit value="Enviar" color={this.props.color} />
        </form>
      </div>
    );
  }
}

export default EventForm;
