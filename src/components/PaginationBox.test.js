import { shallow } from 'enzyme';
import React from 'react';
import PaginationBox from './PaginationBox';

describe('Pagination Box', () => {
  it('should render', () => {
    const wrapper = shallow(<PaginationBox />);
    expect(wrapper.exists()).toBe(true);
  });
});
