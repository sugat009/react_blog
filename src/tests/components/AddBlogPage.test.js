import React from 'react';
import { shallow } from 'enzyme';
import { AddBlogPage } from '../../components/AddBlogPage';
import blogs from '../fixtures/blogs';

let startAddBlog, history, wrapper;

beforeEach(() => {
    startAddBlog = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddBlogPage 
                        startAddBlog={startAddBlog}
                        history={history}
                        />); 
});

test('should render AddBlogPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test handling of onSubmit', () => {
    wrapper.find('BlogForm').prop('onSubmit')(blogs[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(startAddBlog).toHaveBeenLastCalledWith(blogs[2]);
});