import React, { Component } from 'react';

class StartStop extends Component {
    constructor(props) {
        super(props);
    }

    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    }

    render() {
        let {countdownStatus} = this.props;

        let renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="ttButton ttSSbtn" onClick={this.onStatusChange('stopped')}>RESET</button>;
            } else {
                return <button className="ttButton ttSSbtn" onClick={this.onStatusChange('started')}>START</button>
            }
        };

        return(
            <div className="ttButtonContainer">
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
