import React, { Component } from 'react';
import {Link} from 'react-router';

import './navbar.css'

class Navbar extends Component {

  render() {
    return (
      <div className={`navbar navbar-${this.props.linksData.length}`}>
        {this.props.linksData.map((linkData) => {
          return(
            <div className="navbar-link-container" key={linkData.to}>
              <Link
              activeClassName="navbar-active-link"
              onlyActiveOnIndex={linkData.to === '/' ? true : false}
              to={linkData.to}>
                <i className="navbar-icon material-icons">{linkData.icon}</i>
                <span className="navbar-link-text">{linkData.text}</span>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

Navbar.propTypes = {
  linksData: React.PropTypes.array.isRequired,
};

export default Navbar;