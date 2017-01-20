import React, { Component } from 'react';

class About extends Component {

  render() {
    return(
      <div>
        <h1>Why?</h1>
        <p>Just a hobby app to practice my ReactJS skill. There may be many like it, but this one is <a href="https://github.com/Shooshte" target="_blank">mine</a>.</p>
        <h1>What with?</h1>
        <p>ReactJS, webpack, google material design.</p>
        <h1>Source?</h1>
        <p>Feel free to fork, post issues and contribute on <a href="https://github.com/Shooshte/teaTimer" target="_blank">gitHub</a>.</p>
      </div>
    )
  }
}

export default About;
