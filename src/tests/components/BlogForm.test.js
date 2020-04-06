import React from 'react'
import { shallow } from 'enzyme';
import moment from 'moment';
import BlogForm from '../../components/BlogForm';
import blogs from '../fixtures/blogs';


test('should render BlogForm correctly', () => {
    const wrapper = shallow(<BlogForm />);
    expect(wrapper).toMatchSnapshot();
});

// ExpenseForm with data
test('should render BlogForm with data', () => {
    const wrapper = shallow(<BlogForm blog={blogs[2]} />);
    expect(wrapper).toMatchSnapshot();
});

// error rendering
test('should render error', () => {
    const wrapper = shallow(<BlogForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errors').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set title on input change', () => {
    const value = "some title"; // this variable must be named value(compulsory)
    const wrapper = shallow(<BlogForm />);
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('title')).toBe(value);
});

test('should set content on textarea change', () => {
    const value = 'New content value';
    const wrapper = shallow(<BlogForm />);
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('content')).toBe(value);
});

test('should call onSubmit prop for form submit', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<BlogForm blog={blogs[2]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errors')).toBeFalsy();
    expect(onSubmitSpy).toHaveBeenCalledWith({ // blog object is expanded because id is also returned
        title: blogs[2].title,
        content: blogs[2].content,
        createdAt: blogs[2].createdAt
    });
});