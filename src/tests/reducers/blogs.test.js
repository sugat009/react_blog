import blogsReducer from '../../reducers/blogs';
import blogs from '../fixtures/blogs';

test('should set defult state', () => {
    const state = blogsReducer(undefined , { type: "@@INIT" });
    expect(state).toEqual([]);
});

test('should remove blog by id ', () => {
    const action = {
        type: "REMOVE_BLOG",
        id: blogs[2].id
    };
    const state = blogsReducer(blogs, action);
    expect(state).toEqual([ blogs[0], blogs[1] ]);
});

test('should not remove blog if id not found', () => {
    const action = {
        type: 'REMOVE_BLOG',
        id: '22'
    };
    const state = blogsReducer(blogs, action);
    expect(state).toEqual(blogs);
});

test('should add a blog item', () => {
    const blog = {
        id: '4',
        title: "new title",
        content: "some fucking content"
    };
    const action = {
        type: "ADD_BLOG",
        blog
    };
    const state = blogsReducer(blogs, action);
    expect(state).toEqual([
        ...blogs,
        blog
    ]);
});

test('should edit a blog item with given id', () => {
    const updates = {
        content: "some new content"
    };
    const action = {
        type: 'EDIT_BLOG',
        id: '3',
        updates
    };
    const state = blogsReducer(blogs, action);
    expect(state[2].content).toBe(updates.content);
});

test('should not edit blog item if id doesnt match', () => {
    const action = {
        type: 'EDIT_BLOG',
        id: '-1',
        updates: {
            content: 'aaa'
        }
    };
    const result = blogsReducer(blogs, action);
    expect(result).toEqual(blogs);
});

test('should set blogs', () => {
    const action = {
        type: 'SET_BLOG',
        blogs: [blogs[1]]
    };
    const state = blogsReducer(blogs, action);
    expect(state).toEqual([blogs[1]]);
});