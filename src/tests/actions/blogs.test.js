import moment from 'moment';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    removeBlog,
    editBlog,
    addBlog,
    startAddBlog,
    setBlog,
    startRemoveBlog,
    setStartBlog,
    startEditBlog
} from '../../actions/blogs';
import {
    database
} from '../../firebase/firebase';
import blogs from '../fixtures/blogs';

const uid = "somefakeid";
const defaultAuthObject = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const blogData = {};
    blogs.forEach(({ title, content, createdAt, id }) => {
        blogData[id] = { id, title, content, createdAt };
    });
    database.ref(`users/${uid}/blogs`).set(blogData).then(() => done());
});


// REMOVE Blogs tests
test('should setup remove blog action generator', () => {
    const action = removeBlog({
        id: 'abc123'
    });
    expect(action).toEqual({
        type: 'REMOVE_BLOG',
        id: 'abc123'
    });
});

test('should remove blog from firebase', (done) => {
    const store = createMockStore(defaultAuthObject);
    const id = blogs[2].id;
    store.dispatch(startRemoveBlog({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_BLOG',
            id
        });
        return database.ref(`users/${uid}/blogs/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});


// EDIT Blog tests
test('should setup editBlog action generator', () => {
    const action = editBlog("abc12345", {
        title: "new title",
        content: "new content"
    });
    expect(action).toEqual({
        type: 'EDIT_BLOG',
        id: "abc12345",
        updates: {
            title: "new title",
            content: "new content"
        }
    });
});

test('should edit blogs from firebase', (done) => {
    const store = createMockStore(defaultAuthObject);
    const id = blogs[0].id;
    const updates = {
        content: "changed content"
    };
    store.dispatch(startEditBlog(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_BLOG',
            id,
            updates
        });
        return database.ref(`users/${uid}/blogs/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().content).toBe(updates.content);
        done();
    });
});


// Add tests
test('should setup addBlog action generator with provided values', () => {
    const action = addBlog(blogs[2]);
    expect(action).toEqual({
        type: "ADD_BLOG",
        blog: blogs[2]
    });
});

test('should add blog to database and redux store', (done) => {
    const store = createMockStore(defaultAuthObject);
    const blogData = {
        title: 'some title',
        content: 'some content',
        createdAt: 10
    };
    const uid = "somefakeid";
    store.dispatch(startAddBlog(blogData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_BLOG',
                blog: {
                    id: expect.any(String),
                    ...blogData
                }
            });
            return database.ref(`users/${uid}/blogs/${actions[0].blog.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(blogData);
            done();
        });
});

test('should add blog to database and redux store with default values', (done) => {
    const store = createMockStore(defaultAuthObject);
    const blogData = {
        title: '',
        content: '',
        createdAt: 0
    };
    store.dispatch(startAddBlog({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_BLOG',
                blog: {
                    id: expect.any(String),
                    ...blogData
                }
            });
            return database.ref(`users/${uid}/blogs/${actions[0].blog.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(blogData);
            done();
        });
});


// SET blogs parts
test('should setup blog object with data', () => {
    const action = setBlog(blogs);
    expect(action).toEqual({
        type: 'SET_BLOG',
        blogs
    });
});

// test('should fetch the blogs from firebase and set them to redux', (done) => {
//     const store = createMockStore(defaultAuthObject);
//     store.dispatch(setStartBlog()).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'SET_BLOG',
//             blogs
//         });
//         console.log("aaaaaaaaa");
//         done();
//     });
// });