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
    const formatSecondsReturn = wrapper.instance().formatSeconds(180);
    expect(formatSecondsReturn).toBe('03:00');
  });
  it('renderHourglass should return Hourglass passing this.props.state', () => {
    const wrapper = shallow(<Clock totalSeconds={180} status="started"/>);
    const renderHourglassReturn = wrapper.instance().renderHourglass();
    expect(renderHourglassReturn.props.children).toEqual(<Hourglass status="started"/>);
  });
  it('set default props totalSeconds: 0, status: \'stopped\'', () => {
    const wrapper = mount(<Clock/>);
    expect(wrapper.prop('totalSeconds')).toBe(0);
    expect(wrapper.prop('status')).toBe('stopped');
  });
});
