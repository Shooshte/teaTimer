import React, { Component } from 'react';

import '../../assets/styles/components/teaInfo.css';
import '../../assets/styles/base/reusables.css';

class TeaInfo extends Component {
  renderTeaInfo = (teaData) => {
    return teaData.map((teaType) => {
      return (
        <div className="tt-Card" key={teaType.id}>
          <h1 className="tt-Header">{teaType.header}</h1>
          {this.renderTeaText(teaType.text)}
          <span className="tt-Label">Mild: {teaType.brewTime.mild}&nbsp;min.</span>
          <span className="tt-Label">Strong: {teaType.brewTime.strong}&nbsp;min.</span>
        </div>
      )
    })
  };

  renderTeaText = (text) => {
    return text.map((paragraph, index) => {
      return (<p className="tt-Text" key={index}>{paragraph}</p>)
    })
  };

  render() {
    const {teaData} = this.props;
    return(
      <div>
        {this.renderTeaInfo(teaData)}
      </div>
    )
  }
}

TeaInfo.propTypes = {
  teaData: React.PropTypes.array.isRequired
};

export default TeaInfo;
