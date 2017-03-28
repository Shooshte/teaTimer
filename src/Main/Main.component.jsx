import React, { Component } from 'react';

import './main.css';
import Navbar from './Navbar.component';

class Main extends Component {

  linksData = [
    {
      icon: 'hourglass_empty',
      to: '/timer',
      text: 'Timer'
    },
    {
      icon: 'local_cafe',
      to: '/',
      text: 'Tea'
    },
    {
      icon: 'info',
      to: '/about',
      text: 'About'
    }
  ];

  render() {
    return (
      <div>
        <Navbar linksData={this.linksData}/>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object
};

export default Main;
