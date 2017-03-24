import React, { Component } from 'react';

import TEA_DATA from './Tea.data';
import TeaInfo from './TeaInfo.component';

class Tea extends Component {

  render() {
    return(
      <TeaInfo teaData={TEA_DATA}/>
    )
  }
}

export default Tea;
