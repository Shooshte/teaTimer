import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

// Icons
import '../../../node_modules/mdi/css/materialdesignicons.min.css';

// Stylesheets
import '../../assets/styles/components/navigation.css';

class Navigation extends Component {
  renderLinks = (linksData) => {
    return linksData.map((link) => {
      if(link.to === '/') {
        return (
          <li className="tt-Navbar-Li" key={link.text}>
            <IndexLink activeClassName="tt-Navbar-Active-Link" to={link.to} className="tt-Navbar-Link">
              <i className={link.icon}></i>
              <span>{link.text}</span>
            </IndexLink>
          </li>
        );
      } else {
        return (
          <li className="tt-Navbar-Li" key={link.text}>
            <Link activeClassName="tt-Navbar-Active-Link" to={link.to} className="tt-Navbar-Link">
              <i className={link.icon}></i>
              <span>{link.text}</span>
            </Link>
          </li>
        );
      }
    });
  };

  render() {
    const {LINKS} = this.props;
    return(
      <div className="tt-Navbar">
        <ul className="tt-Navbar-List">
          {this.renderLinks(LINKS)}
        </ul>
        <div className="tt-Navbar-banner-container">
          <div className="tt-Navbar-banner">Bleh</div>
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  LINKS: React.PropTypes.array.isRequired
}

export default Navigation;
