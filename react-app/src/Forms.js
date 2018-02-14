import React from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    //the name of input must match state elemetns
    this.state = {
      insurance: false,
      name: '',
      email: '',
      number: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

		console.log(`Input name ${name}. Input value ${value}.`);

    /*
    str = 'module'
    user2 = {name: 'Jim', str: 'AJS'}
    user2 = {name: 'Jim', [str]: 'AJS'}
     */


    this.setState({
      // if no square brackets around name - the value is hardcoded
      // [name] => ][event.targer.name]  accesses object property name programatically
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of months:
          <input
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Insurance:
          <input
            name="insurance"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleInputChange} />
        </label>
        <br />
      </form>
      <h1>Hi, {this.state.name}! You have selected a {this.state.number} month contract {this.state.insurance ? 'with' : 'without'} insurance.</h1>
      </div>
    );
  }
}

export default Forms
