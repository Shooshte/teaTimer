// @flow

import React from 'react';

import './Hourglass.css';

const Hourglass = (props: {status : string}) => {
  if(props.status === 'started') {
    return(
      <div>
        <div className="spinner spinner-started">
          <div className="sand sand-started"></div>
        </div>
      </div>)
  }
  else if(props.status === 'stopped') {
    return(
      <div>
        <div className="spinner spinner-stopped">
          <div className="sand sand-stopped"></div>
        </div>
      </div>)
  }
};

export default Hourglass;
