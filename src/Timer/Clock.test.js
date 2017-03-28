import React from 'react';
import {shallow, mount} from 'enzyme';

import Clock from './Clock.component';
import Hourglass from './Hourglass.component';

describe('<Clock/>', () => {
  it('render .clock-container', () => {
    const wrapper = shallow(<Clock totalSeconds={180} status="started"/>);
    expect(wrapper.find('.clock-container').length).toBe(1);
  });
  it('render .clock-text', () => {
    const wrapper = shallow(<Clock totalSeconds={180} status="started"/>);
    expect(wrapper.find('.clock-text').length).toBe(1);
  });
  it('render .hourgalss-container', () => {
    const wrapper = shallow(<Clock totalSeconds={180} status="started"/>);
    expect(wrapper.find('.hourglass-container').length).toBe(1);
  });
  it('formatSeconds should return a string with the properly formatted time', () => {
    const wrapper = shallow(<Clock totalSeconds={180} status="started"/>);
    expect(wrapper.find('.clock-text').text()).toBe('03:00');
  });
  it('set default props totalSeconds: 0, status: \'stopped\'', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.prop('totalSeconds')).toBe(0);
    expect(wrapper.prop('status')).toBe('stopped');
  });
});
