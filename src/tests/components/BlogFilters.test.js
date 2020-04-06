import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { BlogFilters } from '../../components/BlogFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTitleFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
    setTitleFilter = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();

    wrapper = shallow(
        <BlogFilters 
            filters = {filters}
            setTitleFilter={setTitleFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
        />  
    );
});

test('should render BlogFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render BlogFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});