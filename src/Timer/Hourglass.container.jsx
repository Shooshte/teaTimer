import React, { Component } from 'react';

import './Hourglass.css';

class Hourglass extends Component {

  // render() {
  //   let {status} = this.props;
  //   return(
  //     <div>
  //   {status === 'started' ? (<div className="spinner"><div className="sand"></div></div>) : null})
  //     </div>
  // }

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
            <div className="spinner">
              <div className="sand"></div>
            </div>
          </div>)
      }
  }

}

export default Hourglass;
