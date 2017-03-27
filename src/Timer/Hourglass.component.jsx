import React, { Component } from 'react';

import './Hourglass.css';

class Hourglass extends Component {

  render() {
    let {status} = this.props;
      if(status === 'started') {
        return(
          <div>
            <div className="spinner spinner-started">
              <div className="sand sand-started"></div>
            </div>
          </div>)
      }
      else if(status === 'stopped') {
        return(
          <div>
            <div className="spinner spinner-stopped">
              <div className="sand sand-stopped"></div>
            </div>
          </div>)
      }
  }
}

Hourglass.propTypes = {
  status: React.PropTypes.string.isRequired
};

export default Hourglass;
