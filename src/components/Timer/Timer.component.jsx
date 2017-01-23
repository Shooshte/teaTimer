import React, { Component } from 'react';
import Slider from 'rc-slider';

import '../../../node_modules/rc-slider/assets/index.css';
import '../../assets/styles/components/timer.css';

class Timer extends Component {

  render() {
    return(
      <div className="tt-Card">
        <h1 className="title">This is the Timer component</h1>
        <Slider min={30} max={120} step={30} range={1} />
      </div>
    )
  }
}

export default Timer;
