import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';


test('should render out LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});


test('should call startLogin on button click', () => {
    const startLoginWithGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLoginWithGoogle={startLoginWithGoogle} />);
    wrapper.find('button').first().simulate('click');
    expect(startLoginWithGoogle).toHaveBeenCalled();
});