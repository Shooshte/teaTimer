// @flow

import React from 'react';

import './main.css';
import Navbar from './Navbar.component';
import Modal from '../Modal/Modal.component';

const linksData = [
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

const Main = (props: {children: Object}) => {
  return(
    <div>
      <Navbar linksData={linksData}/>
      <Modal/>
      <div className="content-container">
        {props.children}
      </div>
    </div>
  )
};


export default Main;
