import uuid from 'uuid';
import { database } from '../firebase/firebase';


// add blog post
export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});

// start add blog (async action for addBlog)
export const startAddBlog = (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            title = '',
            content = '',
            createdAt = 0
        } = blogData;
        const blog = { title, content, createdAt };
        return database.ref(`users/${uid}/blogs`).push(blog)
            .then((ref) => {
                dispatch(addBlog({
                    id: ref.key,
                    ...blog
                }));
            });
    };
};

// remove blog post
export const removeBlog = ({ id } = {}) => ({
    type: 'REMOVE_BLOG',
    id
});

export const startRemoveBlog = ({ id } = {}) => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/blogs/${id}`).remove().then(() => {
            dispatch(removeBlog({ id }));
        });
    };
};


// edit blog post
export const editBlog = (id, updates) => ({
    type: 'EDIT_BLOG',
    id,
    updates
});

export const startEditBlog = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/blogs/${id}`).update(updates)
            .then(() => {
                dispatch(editBlog(id, updates));
            });
    };
};


// SET Blogs part
export const setBlog = (blogs) => ({
    type: 'SET_BLOG',
    blogs
});

export const setStartBlog = () => {
    return (dispatch, getState) => {
        return database.ref(`users/${getState().auth.uid}/blogs`).once('value').then((snapshot) => {
            const blogData = [];
            snapshot.forEach((childSnapshot) => {
                blogData.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setBlog(blogData));
        });
    };  
};

// GET blogs part
export const getBlog = (blogs) => ({
    type: 'GET_BLOG',
    blogs
});

export const getStartBlog = () => {
    return (dispatch, getState) => {
        return database.ref(`users`).once('value').then((snapshot) => {
            const blogData = [];
            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.key !== getState().auth.uid) {
                    blogData.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val().blogs
                    });
                }
            });
            dispatch(getBlog(blogData));
            console.log(blogData);
        });
    };
};