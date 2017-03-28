import React from 'react';

const StartStop = ({onStatusChange, countdownStatus}) => {

    return(
      <div className="button-container">
        {countdownStatus === 'started' ?  <button className="button" onClick={() => onStatusChange('stopped')}>STOP</button> : <button className="button" onClick={() => onStatusChange('started')}>START</button>}
      </div>
    )
}

StartStop.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

export default StartStop;
