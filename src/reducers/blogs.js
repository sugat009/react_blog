const blogReducerDefaultState =  [];

export default (state = blogReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [
                ...state,
                action.blog
            ];
        case 'REMOVE_BLOG':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_BLOG':
            return state.map((blog) => {
                if (blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                } else {
                    return blog;
                };
            });
        case 'SET_BLOG':
            console.log(action.blogs, "aaaaaaaaaaaaaaaaaaaa");
            return action.blogs;
        case 'GET_BLOG':
            console.log(action.blogs);
            return action.blogs;
        default:
            return state;
    }
};