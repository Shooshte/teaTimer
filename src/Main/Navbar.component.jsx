import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

import './navbar.css'

class Navbar extends Component {

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
      <div className={`navbar navbar-${this.props.linksData.length}`}>
        {this.renderLinks(this.props.linksData)}
      </div>
    )
  }
}

Navbar.propTypes = {
  linksData: React.PropTypes.array.isRequired,
};

export default Navbar;