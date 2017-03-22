import React, { Component } from 'react';
import Hourglass from './Hourglass.container';

class Clock extends Component {
    constructor(props) {
        super(props);
    }

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
                <div className="ttHourglassContainer">
                    <Hourglass/>
                </div>
            );
        }
    }

    render() {
        let {totalSeconds} = this.props;
        return(
            <div className="ttClockContainer">
                {this.renderHourglass()}
                <div>
                    <span className="ttCLockText">
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
