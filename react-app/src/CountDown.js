import React from 'react';
import ReactDOM from 'react-dom';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startValue,
      color: 'black'
    };
  }

  componentDidMount() {
    // store the ID of the timer so we can kill it later
    this.timerID = setInterval(
      () => {
        this.setState({count: this.state.count - 1})
        if(this.state.count < 10){
          this.setState({color: 'red'})
        }
      },
      1000
    );
  }

  componentWillUnmount() {
    // the clock is no longer being displayed so kill the timer
    clearInterval(this.timerID);
  }

  render() {
    let className = 'red';
    if(this.state.count > 0){
      if(this.state.color === 'red'){
        return <h2 className={className}>Time remaining: {this.state.count} seconds.</h2>;
      }
      return <h2>Time remaining: {this.state.count} seconds.</h2>;
    } else {
      // the clock is no longer being displayed so kill the timer
      clearInterval(this.timerID);
      return <h2>Time up!!</h2>;
    }
  }
}

ReactDOM.render(
  <div>
    <CountDown startValue={10}/>
    <CountDown startValue={20}/>
  </div>,
  document.getElementById('root')
);

export default CountDown;
