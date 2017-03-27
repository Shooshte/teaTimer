import React from 'react';
import {shallow, mount} from 'enzyme';

import About from './About.component';

describe('<About/>', () => {
  it('render .view-content', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('.view-content').length).toBe(1);
  });
  it('render .content-card x3', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('.content-card').length).toBe(3);
  });
  it('render .title x3', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('.title').length).toBe(3);
  });
  it('render .text x6', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('.text').length).toBe(6);
  });
});