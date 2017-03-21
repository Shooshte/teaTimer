import React, { Component } from 'react';

import './main.css';
import Navbar from './Navbar';

class Main extends Component {

  linksData = [
    {
      icon: 'home',
      to: '/',
      text: 'Home motherlover'
    },
    {
      icon: 'filter_vintage',
      to: '/route2',
      text: 'Route2 motherlover'
    },
    {
      icon: 'build',
      to: '/route3',
      text: 'Route3 motherlover'
    },
    {
      icon: 'bookmark',
      to: '/route4',
      text: 'Route4 motherlover'
    },
    {
      icon: 'email',
      to: '/route5',
      text: 'Route5 motherlover'
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
