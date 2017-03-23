import React, { Component } from 'react';
import Hourglass from './Hourglass.container';

import './Clock.css';

class Clock extends Component {
    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        return minutes + ':' + seconds;
    }

    renderHourglass() {
        if(this.props.status === 'started') {
            return (
                <div className="hourglass-container">
                    <Hourglass/>
                </div>
            );
        }
    }

    render() {
        let {totalSeconds} = this.props;
        return(
            <div className="clock-container">
                {this.renderHourglass()}
                <div>
                    <span className="clock-text title">
                        {this.formatSeconds(totalSeconds)}
                    </span>
                </div>
            </div>
        )
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number.isRequired,
    status: React.PropTypes.string.isRequired
};

Clock.defaultProps = {
    totalSeconds: 0,
    status: 'stopped'
};

export default Clock;
