import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Timer from './Timer.component';

describe('<Timer/>', () => {
  // Render
  it('render .timer-card', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('.timer-card').length).toBe(1);
  });
  it('pass state count to Clock as totalSeconds', () => {
    const wrapper = mount(<Timer />);
    const totalSeconds = wrapper.state('count');
    expect(wrapper.find('Clock').prop('totalSeconds')).toEqual(totalSeconds);
  });
  it('pass state countdownStatus to Clock as status', () => {
    const wrapper = mount(<Timer />);
    const status = wrapper.state('countdownStatus');
    expect(wrapper.find('Clock').prop('status')).toEqual(status);
  });
  it('set this.props.location.query.seconds as state.count when passed value < 480', () => {
    const mockUrl = {
      query : {
        seconds: '250'
      }
    };
    const wrapper = mount(<Timer location={mockUrl}/>);
    expect(wrapper.state('count')).toEqual(250);
  });
  it('set state.count to 480 when passed this.props.location.query.seconds > 480', () => {
    const mockUrl = {
      query : {
        seconds: '1000'
      }
    };
    const wrapper = mount(<Timer location={mockUrl}/>);
    expect(wrapper.state('count')).toEqual(480);
  });
  it('call renderStartStop on render', () => {
    const wrapper = mount(<Timer/>);
    let spy = sinon.spy(wrapper.instance(), 'renderStartStop');
    wrapper.update();
    expect(spy.calledOnce).toBe(true);
  });

  // Method tests
  it('handleSliderinput should set state.count to passed value', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().handleSliderInput(9000);
    expect(wrapper.state('count')).toBe(9000);
  });
  it('handleStatusChange should set state.countdownStatus to passed balue', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().handleStatusChange('whatever');
    expect(wrapper.state('countdownStatus')).toBe('whatever');
  });

  // TODO renderStartStop, startTimer, componentDidMount, componentDidUpdate, componentWillUnmount

});
