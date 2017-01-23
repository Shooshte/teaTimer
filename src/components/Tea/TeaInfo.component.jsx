import React, { Component } from 'react';

import '../../assets/styles/components/teaInfo.css';

class TeaInfo extends Component {
  renderTeaInfo = (teaData) => {
    return teaData.map((teaType) => {
      return (
        <div className="tt-Card" key={teaType.id}>
          <div className="tt-media">
            <img className="tea-image" src={teaType.image} alt={teaType.header}/>
            <div className="tea-image-text">
              <h1 className="title">
                {teaType.header}
                <span className="subtitle">Brew Time:</span>
              </h1>
              <div className="label-container">
                <span className="tt-Label">Mild: {teaType.brewTime.mild}&nbsp;min.</span>
                <span className="tt-Label">Strong: {teaType.brewTime.strong}&nbsp;min.</span>
              </div>
            </div>
          </div>
          <div className="text">
            {this.renderTeaText(teaType.text)}
          </div>
        </div>
      )
    })
  };

  renderTeaText = (text) => {
    return text.map((paragraph, index) => {
      return (<p className="teaInfo-p" key={index}>{paragraph}</p>)
    })
  };

  render() {
    const {teaData} = this.props;
    return(
      <div className="tea-info-container">
        {this.renderTeaInfo(teaData)}
      </div>
    )
  }
}

TeaInfo.propTypes = {
  teaData: React.PropTypes.array.isRequired
};

//TODO write TeaInfo component test

export default TeaInfo;
