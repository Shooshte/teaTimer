import React from 'react';
import {shallow, mount} from 'enzyme';

import Tea from './Tea.component';
import TeaData from './Tea.data';
import TeaInfo from "./TeaInfo.component";

describe('<Tea/>', () => {
  it('should pass TeaData to the TeaInfo component', () => {
    const wrapper = shallow(<Tea />);
    expect(wrapper.find('TeaInfo').prop('teaData')).toEqual(TeaData);
  })
});
