import React, { Component } from 'react';

import Clock from './Clock.container';
import StartStop from './StartStop.container';
import MySlider from './Slider.container';

import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 180,
      countdownStatus: 'stopped'
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSetCountdown = this.handleSetCountdown.bind(this);
    this.handleSliderInput = this.handleSliderInput.bind(this);
  }

  componentDidMount() {
    let seconds = parseInt(this.props.location.query.seconds, 10);

    if (seconds && seconds > 0) {
      this.setState({count:seconds});
      window.location.hash = '#/timer';
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          clearInterval(this.timer);
          delete this.timer;
          //this.setState({count:180});
          break;
        default:
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    delete this.timer;
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  }

  handleSliderInput(seconds) {
    this.setState({
      count: seconds
    });
  }

  handleSetCountdown(seconds) {
    if(this.state.count + seconds >= 30) {
      this.setState({
        count: this.state.count + seconds
      });
    } else if(this.state.count + seconds >= 480) {
      this.setState({count: 480});
    } else {
      this.setState({
        count: 0
      });
    }
  }

  handleStatusChange(newStatus) {
    this.setState({ countdownStatus: newStatus });
  }

  render() {
    let {count, countdownStatus} = this.state;
    let renderStartStop = () => {
      if (countdownStatus !== 'stopped') {
        return <StartStop countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return (<div>
          <MySlider onSetCountdown={this.handleSetCountdown} sliderInput={this.handleSliderInput}  totalSeconds={count}/>
          <StartStop countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        </div>);
      }
    };
    return(
      <div className="content-card timer-card">
        <h1 className="title">Tea timer</h1>
        <Clock totalSeconds={count} status={countdownStatus}/>
        {renderStartStop()}
      </div>
    )
  }
}

export default Timer;
