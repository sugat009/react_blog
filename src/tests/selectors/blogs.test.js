import moment from 'moment';
import selectBlogs from '../../selectors/blogs';
import blogs from '../fixtures/blogs';

test('should filter by some test value', () => {
    const filters = {
        title: 'c',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectBlogs(blogs, filters);
    expect(result).toEqual([ blogs[2], blogs[1] ]);
});

test('should filter by startDate', () => {
    const filters = {
        title: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectBlogs(blogs, filters);
    expect(result).toEqual([ blogs[0], blogs[2] ]);
});

test('should filter by endDate', () => {
    const filters = {
        title: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).subtract(1, 'days')
    };
    const result = selectBlogs(blogs, filters);
    expect(result).toEqual([ blogs[1] ]);
});

test('should sort by date', () => {
    const filters = {
        title: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectBlogs(blogs, filters);
    expect(result).toEqual([ blogs[0], blogs[2], blogs[1] ]);
});

test('should sort alphabetically', () => {
    const filters = {
        title: '',
        sortBy: 'alphabet',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectBlogs(blogs, filters);
    expect(result).toEqual([ blogs[2], blogs[1], blogs[0] ]);
});