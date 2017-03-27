import React from 'react';
import {shallow, mount} from 'enzyme';

import MySlider from './Slider.container';
import Slider from 'rc-slider';

describe('<MySlider/>', () => {
  it('render .slider-container', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = shallow(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.slider-container').length).toBe(1);
  });
  it('render .rc-slider', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.rc-slider').length).toBe(1);
  });
  it('render .button-container', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.button-container').length).toBe(1);
  });
  it('render .button x2', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.button').length).toBe(2);
  });
  it('render first .button with text -', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.button').at(0).text()).toBe('-');
  });
  it('render second .button with text +', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    expect(wrapper.find('.button').at(1).text()).toBe('+');
  });
  it('call handleButton passing -30 when clicking the first button', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    wrapper.find('.button').at(0).simulate('click');
    expect(mockhandleSetCountdown).toHaveBeenCalledWith(-30);
  });
  it('call handleButton passing 30 when clicking the seond button', () => {
    const mockhandleSetCountdown = jest.fn();
    const mockHandleSlideInput = jest.fn();
    const wrapper = mount(<MySlider totalSeconds={180} sliderInput={mockHandleSlideInput} onSetCountdown={mockhandleSetCountdown}/>);
    wrapper.find('.button').at(1).simulate('click');
    expect(mockhandleSetCountdown).toHaveBeenCalledWith(30);
  });

});
