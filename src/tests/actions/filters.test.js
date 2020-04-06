import moment from 'moment';
import {
    setStartDate,
    setEndDate,
    sortByDate,
    sortByAlphabet,
    setTitleFilter
} from '../../actions/filters';

test('should setup setStartDate action generator', () => {
    const startDate = moment(1000);
    const action = setStartDate(startDate);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate
    });
});

test('should setup setEndDate action generator', () => {
    const endDate = moment(2000);
    const action = setEndDate(endDate);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate
    });
});

test('should setup sortByDate action generator', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup sortByAlphabet action generator', () => {
    expect(sortByAlphabet()).toEqual({
        type: 'SORT_BY_ALPHABET'
    });
});

test('should setup setTitleFilter action generator', () => {
    const title = "some title";
    const action = setTitleFilter(title);
    expect(action).toEqual({
        type: 'SET_TITLE_FILTER',
        title
    });
});