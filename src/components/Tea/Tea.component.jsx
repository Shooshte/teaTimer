import React, { Component } from 'react';

import TEA_DATA from './Tea.data';
import TeaInfo from './TeaInfo.component';


class Tea extends Component {
  render() {
    return(
      <div className="teaInfo">
        <TeaInfo teaData={TEA_DATA}/>
      </div>
    )
  }
}

//TODO write Tea component test

export default Tea;
