import selectBlogsTotal from '../../selectors/blogs-total';
import blogs from '../fixtures/blogs';

test('should return 0 if no blogs', () => {
    const res = selectBlogsTotal([]);
    expect(res).toBe(0);
});

test('should return 1 if 1 blog ', () => {
    const res = selectBlogsTotal([ blogs[1] ]);
    expect(res).toBe(1);
});

test('should return the number of blogs displayed', () => {
    const res = selectBlogsTotal(blogs);
    expect(res).toBe(3);
});