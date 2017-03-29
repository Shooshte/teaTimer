// @flow

import React from 'react';

const StartStop = (props: {onStatusChange: Function, countdownStatus: string}) => {
    return(
      <div className="button-container">
        {props.countdownStatus === 'started' ?  <button className="button" onClick={() => props.onStatusChange('stopped')}>STOP</button> : <button className="button" onClick={() => props.onStatusChange('started')}>START</button>}
      </div>
    )
};

export default StartStop;
