import { shallow } from 'enzyme';
import React from 'react';
import MusicCard from './MusicCard';

it('Expect to render Music Card component', () => {
  const wrapper = shallow(<MusicCard />);
  expect(wrapper.exists()).toBe(true);
});
