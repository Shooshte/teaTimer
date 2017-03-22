import React, { Component } from 'react';

import './TeaInfo.css';

class TeaInfo extends Component {
  renderTeaInfo = (teaData) => {
    return teaData.map((teaType) => {
      return (
        <div className="content-card" key={teaType.id}>
          <div className="tea-image-container">
            <img className="tea-image" src={teaType.image} alt={teaType.header}/>
            <h1 className="title tea-image-title">&nbsp;&nbsp;{teaType.header}</h1>
          </div>
            <h3 className="title brew-time-title">Recommended brew time:</h3>
          <div className="brew-time-text-container">
            {/*TODO link to timer route passing the time as a parameter*/}
            <button className="button brew-time-text">Mild: {teaType.brewTime.mild}&nbsp;min.</button>
            <button className="button brew-time-text">Strong: {teaType.brewTime.strong}&nbsp;min.</button>
          </div>
            <div className="tea-text-container">
              {this.renderTeaText(teaType.text)}
            </div>
        </div>
      )
    })
  };

  renderTeaText = (text) => {
    return text.map((paragraph, index) => {
      return (
        <p className="text" key={index}>{paragraph}</p>)
    })
  };

  render() {
    const {teaData} = this.props;
    return(
      <div className="view-content tea-info">
        {this.renderTeaInfo(teaData)}
      </div>
    )
  }
}

TeaInfo.propTypes = {
  teaData: React.PropTypes.array.isRequired
};

export default TeaInfo;