import React from 'react';
import { shallow } from 'enzyme';
import blogs from '../fixtures/blogs';
import BlogListItem from '../../components/BlogListItem';


test('should render BlogListItem correctly', () => {
    const wrapper = shallow(<BlogListItem {...blogs[1]} />);
    expect(wrapper).toMatchSnapshot();
});