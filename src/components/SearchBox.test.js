import { shallow, mount } from 'enzyme';
import React from 'react';
import { SearchBox } from './SearchBox';
import MusicCard from './MusicCard';

let wrapper;

afterAll(() => {
  wrapper.unmount();
});
describe('Search Box', () => {
  wrapper = mount(<SearchBox />);

  it('should be exist', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should be empty initially', () => {
    expect(wrapper.find('input').text()).toEqual('');
  });

  it('should show user input query in search box', () => {
    expect(
      wrapper.find('input').simulate('change', { target: { value: 'cats' } })
    );
    expect(wrapper.find('input').props().value).toEqual('cats');
  });
});
