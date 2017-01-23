import React, { Component } from 'react';
import aboutContent from './About.data';
import '../../assets/styles/components/about.css';

class About extends Component {

  renderAbout = (aboutContent) => {
    return(
      <div className="tt-Card">
        {aboutContent.map((section) => {
          return (
            <div className="about-section" key={section.id}>
              <h1 className="title">
                {section.heading}
                <span className="subtitle">{section.subheading}</span>
              </h1>
              {this.renderTags(section.tags)}
              {this.renderText(section.text)}
            </div>);
        })}
      </div>
    )
  };

  renderTags = (tags) => {
    if(tags) {
      return (
        <div className="label-container">
          {tags.map((tag) => {
            return (
              <span className="tt-Label" key={tag.text}>
              <a href={tag.href} target="_blank">{tag.text}</a>
            </span>
            )
          })}
        </div>
      )
    }
  };

  renderText = (text) => {
    if(text) {
      return (
        <div className="text">
          {text.map((part) => {
            return (
              <p key={part.id}>{part.paragraph}</p>
            )
          })}
        </div>
      );
    }
  };

  render() {
    return(
      <div>{this.renderAbout(aboutContent)}</div>
    );
  }
}

export default About;
