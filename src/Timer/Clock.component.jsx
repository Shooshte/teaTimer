import React from 'react';
import Hourglass from './Hourglass.component';

import './Clock.css';

const formatSeconds = (totalSeconds) => {
  let seconds = totalSeconds % 60;
  let minutes = Math.floor(totalSeconds / 60);
  if(seconds < 10) {
    seconds = '0' + seconds;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  return minutes + ':' + seconds;
};

const Clock = ({status, totalSeconds}) => {
    return(
      <div className="clock-container">
          <div className="hourglass-container">
              <Hourglass status={status}/>
          </div>
          <div>
            <span className="clock-text title">
                {formatSeconds(totalSeconds)}
            </span>
          </div>
      </div>
    )

};

Clock.propTypes = {
    totalSeconds: React.PropTypes.number.isRequired,
    status: React.PropTypes.string.isRequired
};

Clock.defaultProps = {
    totalSeconds: 0,
    status: 'stopped'
};

export default Clock;
