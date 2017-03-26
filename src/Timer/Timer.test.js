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
  it('handleStatusChange should set state.countdownStatus to passed value', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().handleStatusChange('whatever');
    expect(wrapper.state('countdownStatus')).toBe('whatever');
  });
  it('call startTimer() when state.countdownStatus is changed to \'started\'', () => {
    const wrapper = shallow(<Timer/>);
    const spy = sinon.spy(wrapper.instance(), 'startTimer');
    wrapper.instance().setState({countdownStatus: 'started'});
    expect(spy.calledOnce).toBe(true);
  });
  it('delete existing timer when state.countdownStatus is changed to \'stopped\'', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().setState({countdownStatus: 'started'});
    wrapper.instance().setState({countdownStatus: 'stopped'});
    expect(wrapper.instance().timer).toBe(undefined);
  });
  it('startTimer should set a new timer', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().startTimer();
    expect(wrapper.instance().timer).toBeDefined();
  });
  it('startTimer timer should lower count by 1 every second', () => {
    jest.useFakeTimers();
    const wrapper = shallow(<Timer/>);
    wrapper.setState({count: 5});
    wrapper.instance().startTimer();
    jest.runTimersToTime(1000);
    expect(wrapper.state('count')).toBe(4);
  });
  it('startTimer timer should not lower count below 0', () => {
    jest.useFakeTimers();
    const wrapper = shallow(<Timer/>);
    wrapper.setState({count: 1});
    wrapper.instance().startTimer();
    jest.runTimersToTime(4000);
    expect(wrapper.state('count')).toBe(0);
  });
  it('render startStop should pass countdownStatus, onStatusChange to StartStop', () => {
    const wrapper = mount(<Timer/>);
    const renderStartStopReturn = wrapper.instance().renderStartStop();
    expect(renderStartStopReturn.props.children[1].props.onStatusChange).toEqual(wrapper.instance().handleStatusChange);
    expect(renderStartStopReturn.props.children[1].props.countdownStatus).toEqual(wrapper.state('countdownStatus'));
  });
  it('render startStop should not return MySlider when state is not \'stopped\'', () => {
    const wrapper = shallow(<Timer/>);
    wrapper.instance().setState({countdownStatus: 'whatever'});
    expect(wrapper.find('MySlider').length).toBe(0);
  });
  it('render startStop should return MySlider passing onSetCountdown, sliderInput when state is \'stopped\'', () => {
    const wrapper = mount(<Timer/>);
    wrapper.instance().setState({countdownStatus : 'stopped'});
    const renderStartStopReturn = wrapper.instance().renderStartStop();
    expect(renderStartStopReturn.props.children[0].props.onSetCountdown).toEqual(wrapper.instance().handleSetCountdown);
    expect(renderStartStopReturn.props.children[0].props.sliderInput).toEqual(wrapper.instance().handleSliderInput);
  });
});
