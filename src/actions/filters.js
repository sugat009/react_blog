// set text filter
export const setTitleFilter = (title = '') => ({
    type: 'SET_TITLE_FILTER',
    title
});

// sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// sort alphabetically
export const sortByAlphabet = () => ({
    type: 'SORT_BY_ALPHABET'
});


// set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// set end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});