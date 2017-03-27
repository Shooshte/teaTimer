import React, { Component } from 'react';

class StartStop extends Component {

    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }

    render() {
        let {countdownStatus} = this.props;

        let renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button" onClick={this.onStatusChange('stopped')}>STOP</button>;
            } else {
                return <button className="button" onClick={this.onStatusChange('started')}>START</button>
            }
        };

        return(
            <div className="button-container">
                {renderStartStopButton()}
            </div>
        )
    }
}

StartStop.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

export default StartStop;
