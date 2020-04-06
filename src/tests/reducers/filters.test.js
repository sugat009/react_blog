import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        title: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to aplhabet', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_ALPHABET' });
    expect(state).toEqual({
        title: '',
        sortBy: 'alphabet',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to date', () => {
    const currentState = {
        title: '',
        sortBy: 'alphabet',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe("date");
});

test('should set title filter', () => {
    const title = "some fucking title";
    const action = {
        type: 'SET_TITLE_FILTER',
        title
    };
    const result = filtersReducer(undefined, action);
    expect(result.title).toBe(title);
});

test('should set startDate filter', () => {
    const startDate = moment(10);
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const result = filtersReducer(undefined, action);
    expect(result.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment(20);
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const result = filtersReducer(undefined, action);
    expect(result.endDate).toEqual(endDate);
});