import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import TeaInfo from './TeaInfo.component';
import TeaData from './Tea.data';

describe('<TeaInfo/>', () => {

  // Render tests
  it('render tea-info', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.tea-info').length).toBe(1);
  });
  it('render content-card', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.content-card').length).toBe(TeaData.length);
  });
  it('render tea-image-container', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.tea-image-container').length).toBe(TeaData.length);
  });
  it('render tea-image-title', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.tea-image-title').length).toBe(TeaData.length);
  });
  it('render brew-time-title', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.brew-time-title').length).toBe(TeaData.length);
  });
  it('render brew-time-text-container', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.brew-time-text-container').length).toBe(TeaData.length);
  });
  it('render brew-time-text', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.brew-time-text').length).toBe(TeaData.length * 2);
  });
  it('render tea-text-container', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    expect(wrapper.find('.tea-text-container').length).toBe(TeaData.length);
  });
  const mockTeaData = [{
    id: 'wtid',
    image: 'imageSrc',
    header: 'header',
    text: [
      'blah1', 'blah2'
    ],
    brewTime: {
      mild: 1,
      strong: 1
    }
  }];
  it('pass image src to tea-image', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.tea-image').prop('src')).toBe(mockTeaData[0].image);
  });
  it('pass tea header to tea-image alt', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.tea-image').prop('alt')).toBe(mockTeaData[0].header);
  });
  it('render tea header as text of .tea-image-title', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.tea-image-title').text()).toBe(' ' + mockTeaData[0].header);
  });
  it('render tea brewTime mild as text of .brew-time-text', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.brew-time-text').at(0).text()).toMatch(mockTeaData[0].brewTime.mild.toString());
  });
  it('render tea brewTime strong as text of .brew-time-text', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.brew-time-text').at(1).text()).toMatch(mockTeaData[0].brewTime.strong.toString());
  });
  it('render tea text strings into .text paragraphs', () => {
    const wrapper = shallow(<TeaInfo teaData={mockTeaData}/>);
    expect(wrapper.find('.text').at(0).text()).toMatch(mockTeaData[0].text[0]);
    expect(wrapper.find('.text').at(1).text()).toMatch(mockTeaData[0].text[1]);
  });

  //Component load test
  it('call renderTeaInfo on component load', () => {
    const wrapper = mount(<TeaInfo teaData={TeaData}/>);
    let spy = sinon.spy(wrapper.instance(), 'renderTeaInfo');
    wrapper.update();
    expect(spy.calledOnce).toBe(true);
  });

  //Method tests
  it('renderTeaInfo should return an array', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    const functReturn = wrapper.instance().renderTeaInfo(TeaData);
    expect(functReturn.constructor === Array).toBe(true);
  })
  it('renderTeaInfo should call renderTeaText', () => {
    const wrapper = mount(<TeaInfo teaData={TeaData}/>);
    let spy = sinon.spy(wrapper.instance(), 'renderTeaText');
    wrapper.update();
    expect(spy.called).toBe(true);
  });
  it('renderTeaText should return an array', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    const functReturn = wrapper.instance().renderTeaText(TeaData[0].text);
    expect(functReturn.constructor === Array).toBe(true);
  });
  it('renderTeaText should return an array element for every text string', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    const functReturn = wrapper.instance().renderTeaText(TeaData[0].text);
    expect(functReturn.length).toBe(TeaData[0].text.length);
  });
});
