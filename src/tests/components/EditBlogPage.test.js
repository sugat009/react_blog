import React from 'react';
import { shallow } from 'enzyme';
import blogs from '../fixtures/blogs';
import { EditBlogPage } from '../../components/EditBlogPage';

let editBlogSpy, wrapper, history, removeBlogSpy;

beforeEach(() => {
    editBlogSpy = jest.fn();
    removeBlogSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditBlogPage 
                        blog={blogs[2]}
                        startEditBlog={editBlogSpy}
                        history={history}
                        startRemoveBlog={removeBlogSpy}
                      />);
});


test('should render EditBlogForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should hanlde edit blog correctly', () => {
    wrapper.find('BlogForm').prop('onSubmit')(blogs[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editBlogSpy).toHaveBeenLastCalledWith(blogs[2].id, blogs[2]);
});

test('should handle remove blog correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeBlogSpy).toHaveBeenLastCalledWith({ id: blogs[2].id });
});