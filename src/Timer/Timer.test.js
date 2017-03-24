import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Timer from './Timer.component';

describe('<Timer/>', () => {
  it('render .timer-card', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('.timer-card').length).toBe(1);
  });
  it('pass count to Clock as totalSeconds', () => {
    const wrapper = mount(<Timer />);
    wrapper.instance().props.location.query.seconds = 180;
    expect(wrapper.find('Clock').prop('totalSeconds').toEqual(180));
  })
});
