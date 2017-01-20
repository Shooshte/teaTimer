import React from 'react';
import {shallow} from 'enzyme';
import Main from '../components/core/Main.component';

describe('<Navigation/>', () => {
  it('should render Navigation', () => {
    const main = shallow(<Main/>);
    expect(main.find('Navigation').length).toBe(1);
  });
});
