import React from 'react';
import ReactDOM from 'react-dom';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insurance: true,
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

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
      <form>
        <label>
          I wish to receive your email newsletter.
          <input
            name="insurance"
            type="checkbox"
            checked={this.state.insurance}
            onChange={this.handleInputChange} />
        </label>
        <br />
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

      </form>
      <h1>Hi, {this.state.name}! You have selected a {this.state.number} month contract .</h1>
      </div>
    );
  }
}

export default Forms
