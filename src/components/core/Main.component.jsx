// Vendor
import React, { Component } from 'react';

// Components
import Navigation from './Navigation.component';

// Stylesheets
import '../../assets/styles/components/main.css';

class Main extends Component {
  render() {
    const LINKS = [
      {
        to: 'timer',
        icon: 'mdi mdi-timer-sand-empty',
        text: 'Timer'
      },
      {
        to: '/',
        icon: 'mdi mdi-coffee',
        text: 'Tea'
      },
      {
        to: 'about',
        icon: 'mdi mdi-information-outline',
        text: 'About'
      }
    ];
    return (
      <div className="tt-App-Container">
        <Navigation LINKS={LINKS}/>
          {this.props.children}
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object
};

export default Main;
