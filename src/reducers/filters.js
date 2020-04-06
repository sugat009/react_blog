import moment from 'moment';

const filtersReducersDefaultState = {
    title: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducersDefaultState, action) => {
    switch(action.type) {
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title: action.title
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_ALPHABET':
            return {
                ...state,
                sortBy: 'alphabet'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    };
};