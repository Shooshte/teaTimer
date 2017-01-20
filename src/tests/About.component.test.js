import React from 'react';
import {shallow} from 'enzyme';
import Landing from '../components/About/About.component';

describe('<About/>', () => {
  // Render tests
  it('should render 3 headers, 3 paragraphs and 2 links', () => {
    const landing = shallow(<Landing/>);
    expect(landing.find('h1').length).toBe(3);
    expect(landing.find('p').length).toBe(3);
    expect(landing.find('a').length).toBe(2);
  });
  it('should render the correct text', () => {
    const landing = shallow(<Landing/>);
    expect(landing.find('h1').at(0).text()).toBe('Why?');
    expect(landing.find('h1').at(1).text()).toBe('What with?');
    expect(landing.find('h1').at(2).text()).toBe('Source?');
    expect(landing.find('p').at(0).text()).toBe('Just a hobby app to practice my ReactJS skill. There may be many like it, but this one is mine.');
    expect(landing.find('p').at(1).text()).toBe('ReactJS, webpack, google material design.');
    expect(landing.find('p').at(2).text()).toBe('Feel free to fork, post issues and contribute on gitHub.');
  });
  it('should render the correct links', () => {
    const landing = shallow(<Landing/>);
    expect(landing.find('a').at(0).prop('href')).toBe('https://github.com/Shooshte');
    expect(landing.find('a').at(0).prop('target')).toBe('_blank');
    expect(landing.find('a').at(1).prop('href')).toBe('https://github.com/Shooshte/teaTimer');
    expect(landing.find('a').at(1).prop('target')).toBe('_blank');
  });
});
