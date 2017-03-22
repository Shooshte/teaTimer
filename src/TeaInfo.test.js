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

  //Component load test
  it('call renderTeaInfo on component load', () => {
    const wrapper = mount(<TeaInfo teaData={TeaData}/>);
    let spy = sinon.spy(wrapper.instance(), 'renderTeaInfo');
    wrapper.update();
    expect(spy.calledOnce).toBe(true);
  });

  //Method tests
  it('renderTeaInfo should call renderTeaText', () => {
    const wrapper = mount(<TeaInfo teaData={TeaData}/>);
    let spy = sinon.spy(wrapper.instance(), 'renderTeaText');
    wrapper.update();
    expect(spy.called).toBe(true);
  });
  it('renderTeaText should return an array element for every text string', () => {
    const wrapper = shallow(<TeaInfo teaData={TeaData}/>);
    const functReturn = wrapper.instance().renderTeaText(TeaData[0].text);
    expect(functReturn.length).toBe(TeaData[0].text.length);
  });

});
