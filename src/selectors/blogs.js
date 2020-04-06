import moment from 'moment';

// get visible blogs after the filters have been applied

export default (blogs, { title, sortBy, startDate, endDate }) => {
    return blogs.filter((blog) => {
        const createdAtMoment = moment(blog.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const titleMatch = blog.title.toLowerCase().includes(title.toLowerCase());
        
        return startDateMatch && endDateMatch && titleMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'alphabet') {
            return a.title > b.title ? 1 : -1;
        }
    });
};