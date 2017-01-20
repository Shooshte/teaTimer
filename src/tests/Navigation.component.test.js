import React from 'react';
import {Link, IndexLink} from 'react-router';
import {mount} from 'enzyme';
import Navigation from '../components/core/Navigation.component';

describe('<Navigation/>', () => {
  it('should render Navigation links', () => {
    const links = [
      {
        to: '/',
        icon: 'hourglass_empty',
        text: 'Timer'
      },
      {
        to: 'tea',
        icon: 'local_cafe',
        text: 'Tea'
      }
    ];
    const navigation = mount(<Navigation LINKS={links}/>);
    const linksCount = links.length;
    expect(navigation.find('ul').length).toBe(1);
    expect(navigation.find('li').length).toBe(linksCount);
    expect(navigation.find('a').length).toBe(linksCount);
    expect(navigation.find('i').length).toBe(linksCount);
    expect(navigation.find('span').length).toBe(linksCount);
    expect(navigation.find(IndexLink).prop('to')).toBe('/');
    expect(navigation.find(Link).at(1).prop('to')).toBe('tea');

    expect(navigation.find('span').at(0).text()).toBe(links[0].text);

    expect(navigation.find('.' + links[0].icon).length).toBe(1);
    expect(navigation.find('.' + links[1].icon).length).toBe(1);
  });
});
