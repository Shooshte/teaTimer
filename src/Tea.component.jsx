import React, { Component } from 'react';

import TEA_DATA from './Tea.data';
import TeaInfo from './TeaInfo.component';


class Tea extends Component {

  // TODO implement method for sending brew time to timer component and pass it to TeaInfo

  render() {
    return(
      <TeaInfo teaData={TEA_DATA}/>
    )
  }
}

export default Tea;
