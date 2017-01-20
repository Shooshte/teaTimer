import React from 'react';
import {shallow} from 'enzyme';
import Landing from '../components/Landing.component';

describe('<Landing/>', () => {
  it('should render a header to the page', () => {
    const landing = shallow(<Landing/>);
    expect(landing.find('h1').text()).toBe('This is the Landing component');
  });
});
