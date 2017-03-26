import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import StartStop from './StartStop.container';

describe('<StartStop/>', () => {
  it('render .button-container', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<StartStop countdownStatus="" onStatusChange={mockFn}/>);
    expect(wrapper.find('.button-container').length).toBe(1);
  });
  it('render stop button when countdownstatus is started', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<StartStop countdownStatus="started" onStatusChange={mockFn}/>);
    expect(wrapper.find('.button').text()).toBe('STOP');
  });
  it('render start button when countdownstatus is stopped', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<StartStop countdownStatus="stopped" onStatusChange={mockFn}/>);
    expect(wrapper.find('.button').text()).toBe('START');
  });
  it('call onStatusChange passing stopped when STOP button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<StartStop countdownStatus="started" onStatusChange={mockFn}/>);
    wrapper.find('.button').simulate('click');
    expect(mockFn).toHaveBeenCalledWith('stopped');
  });
  it('call onStatusChange passing started when START button is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<StartStop countdownStatus="stopped" onStatusChange={mockFn}/>);
    wrapper.find('.button').simulate('click');
    expect(mockFn).toHaveBeenCalledWith('started');
  });
});
