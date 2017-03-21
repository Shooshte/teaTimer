import React from 'react';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import Navbar from './Navbar';

const mockLinksData = [
  {
    icon: 'home',
    to: '/',
    text: 'Home motherlover'
  },
  {
    icon: 'filter_vintage',
    to: '/route2',
    text: 'Route2 motherlover'
  },
  {
    icon: 'build',
    to: '/route3',
    text: 'Route3 motherlover'
  }
];

describe('<Navbar/>', () => {
  // Render tests
  it('render navbar div', () => {
    const wrapper = shallow(<Navbar linksData={mockLinksData}/>);
    expect(wrapper.find('.navbar').length).toBe(1);
  });
  it('should add navbar-links.length class to navbar div', () => {
    const wrapper = shallow(<Navbar linksData={mockLinksData}/>);
    expect(wrapper.find('.navbar-3').length).toBe(1);
  });
  it('should call renderLinks on render', () => {
    const wrapper = mount(<Navbar linksData={mockLinksData}/>);
    const spy = sinon.spy(wrapper.instance(), 'renderLinks');
    wrapper.update();
    expect(spy.calledOnce).toBe(true);
  });

  // Method tests
  it('renderLinks should return an array', () => {
    const wrapper = shallow(<Navbar linksData={mockLinksData}/>);
    const renderLinksReturn = wrapper.instance().renderLinks(mockLinksData);
    expect(renderLinksReturn.constructor).toBe(Array);
  });
  it('renderLinks should return a IndexLink when passed a link with to: \"/\"', () => {
    const wrapper = shallow(<Navbar linksData={mockLinksData}/>);
    const renderLinksReturn = wrapper.instance().renderLinks(mockLinksData);
    let foundIndexLink = false;
    renderLinksReturn.map((linkHtml) => {
      {linkHtml.props.children.type.displayName === 'IndexLink' ? foundIndexLink = true : null};
    });
    expect(foundIndexLink).toBe(true);
  });

});
