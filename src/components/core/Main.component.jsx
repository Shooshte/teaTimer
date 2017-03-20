// Vendor
import React, { Component } from 'react';

// Components
import Navigation from './Navigation.component';

// Stylesheets
import '../../assets/styles/components/main.css';

class Main extends Component {
  render() {
    return (
      <div className="tt-App-Container">
        <Navigation/>
          {this.props.children}
      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object
};

export default Main;
