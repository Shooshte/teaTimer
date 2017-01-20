import React, { Component } from 'react';

class TeaInfo extends Component {
  renderTeaInfo = (teaData) => {
    return teaData.map((teaType) => {
      return (
        <div key={teaType.id}>
          <h1>{teaType.header}</h1>
          {this.renderTeaText(teaType.text)}
          <span>{teaType.brewTime.mild}</span>
          <span>{teaType.brewTime.strong}</span>
        </div>
      )
    })
  };

  renderTeaText = (text) => {
    return text.map((paragraph, index) => {
      return (<p key={index}>{paragraph}</p>)
    })
  }

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
}

export default TeaInfo;
