import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import React, { Component } from 'react';
class Apps extends Component {
  state = {
    value: 0,
  }
  addition = () => {
    this.setState({ value: this.state.value + 1 });
  };
  sous = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {

    return (
      <div>
        
        <button onClick={this.addition} className="btn btn-secondary">+</button>
        <button onClick={this.sous} className="btn btn-secondary">-</button>
        <span> {this.state.value}</span>
      </div>

    );
  }
}

export default Apps;

