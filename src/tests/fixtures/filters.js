import moment from 'moment';

const filters = {
    title: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    title: 'new blog',
    sortBy: 'alphabet',
    startDate: moment(0),
    endDate: moment(0).add(4 ,'days')
};

export { filters, altFilters };