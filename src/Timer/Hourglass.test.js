import React from 'react';
import {shallow} from 'enzyme';

import Hourglass from './Hourglass.container';

describe('<Hourglass/>', () => {
  it('render .spinner-started when passe status \'started\'', () => {
    const wrapper = shallow(<Hourglass status="started"/>);
    expect(wrapper.find('.spinner-started').length).toBe(1);
  });
  it('render .sand-started when passe status \'started\'', () => {
    const wrapper = shallow(<Hourglass status="started"/>);
    expect(wrapper.find('.sand-started').length).toBe(1);
  });
  it('render .spinner-stopped when passe status \'stopped\'', () => {
    const wrapper = shallow(<Hourglass status="stopped"/>);
    expect(wrapper.find('.spinner-stopped').length).toBe(1);
  });
  it('render .sand-stopped when passe status \'stopped\'', () => {
    const wrapper = shallow(<Hourglass status="stopped"/>);
    expect(wrapper.find('.sand-stopped').length).toBe(1);
  })
});
