// @flow

import React from 'react';
import {Link} from 'react-router';

import './navbar.css'

const Navbar = (props: {linksData: Array<any>}) => {
  return (
    <div className={`navbar navbar-${props.linksData.length}`}>
      {props.linksData.map((linkData) => {
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
};

export default Navbar;