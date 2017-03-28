import React from 'react';
import {Link} from 'react-router';

import './navbar.css'

const Navbar = ({linksData}) => {
  return (
    <div className={`navbar navbar-${linksData.length}`}>
      {linksData.map((linkData) => {
        return(
          <div className="navbar-link-container" key={linkData.to}>
            <Link
              activeClassName="navbar-active-link"
              onlyActiveOnIndex={linkData.to === '/'}
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

Navbar.propTypes = {
  linksData: React.PropTypes.array.isRequired,
};

export default Navbar;