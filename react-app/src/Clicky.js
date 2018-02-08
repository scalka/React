import React from 'react';

class Clicky extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: 0
		};
		// This binding is necessary to make `this` work in the onclick callback
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(btn) {
		if(btn === 'up'){
      this.setState({
  			clicked: this.state.clicked + 1
  		});
    }
    if(btn === 'down'){
      this.setState({
  			clicked: this.state.clicked - 1
  		});
    }
	}
	render() {
		return (
      <div>
        <h1>Button has been clicked {this.state.clicked} times.</h1>

				<button type="btn1" onClick={(e) => this.handleClick('up', e)}>UP</button>

        <button type="btn2" onClick={(e) => this.handleClick('down', e)}>DOWN</button>
			</div>
		);
	}
}


export default Clicky;
