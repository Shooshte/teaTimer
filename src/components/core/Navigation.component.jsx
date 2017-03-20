import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

import '../../assets/styles/components/navigation.css'

class Navigation extends Component {
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

  renderLinks = (linksData) => {
    return linksData.map((linkData) => {
      if(linkData.to === '/') {
        return(
          <div className="navbar-link-container" key={linkData.to}>
            <IndexLink activeClassName="navbar-active-link" to={linkData.to}>
              <i className="navbar-icon material-icons">{linkData.icon}</i>
              <span className="navbar-link-text">{linkData.text}</span>
            </IndexLink>
          </div>
        )
      }
      else {
        return(
          <div className="navbar-link-container" key={linkData.to}>
            <Link activeClassName="navbar-active-link" to={linkData.to}>
              <i className="navbar-icon material-icons">{linkData.icon}</i>
              <span className="navbar-link-text">{linkData.text}</span>
            </Link>
          </div>
        )
      }
    })
  };

  render() {
    return (
      <div className={`navbar navbar-${this.linksData.length}`}>
        {this.renderLinks(this.linksData)}
      </div>
    )
  }
}

export default Navigation;