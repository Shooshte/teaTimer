import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="view-content">
        <div className="content-card">
          <h1 className="title">Thought process</h1>
          <p className="text">I created this app after finishing a <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">Udemy React course</a>. The <a href="https://github.com/Shooshte/ReactTimer" target="_blank">initial project</a> contained a simple clock, so I decided to add onto the functionality and create a simple countdown app that shows when your tea is ready. Afterwards I applied some custom styles based on Google Material design.</p>
          <p className="text">The basic intent for creating this was to practice state management, unit testing and re-visit the concepts I learned during the course.</p>
        </div>
        <div className="content-card">
          <h1 className="title">Technology</h1>
          <p className="text">The app is bootstrapped using <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react app</a>. It is build with ReactJS, and uses <a href="https://github.com/react-component/slider" target="_blank">rc-slider</a>. Unit testing is integrated using Enzyme and Jest. The design is build upon Google Material Design guidelines.</p>
          <p className="text">The app is hosted on gitHub pages.</p>
        </div>
        <div className="content-card">
          <h1 className="title">Source Code</h1>
          <p className="text">If you are interested in seeing the source code, contributing or posting a code review please checkout the <a href="https://github.com/Shooshte/teaTimer" target="_blank">gitHub repository</a>.</p>
          <p className="text">The repository uses a set of standard npm commands - npm start, npm run build, npm run test.</p>
        </div>
      </div>
    );
  }
}

export default About;
