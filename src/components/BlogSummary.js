import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectBlogs from '../selectors/blogs';
import selectBlogsTotal from '../selectors/blogs-total';

export const BlogSummary = ({ blogCount, blogsTotal }) => {
    const blogWord = blogCount === 1 ? 'Blog' : 'Blogs';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{blogCount}</span> {blogWord} of <span>{blogsTotal}</span>.</h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Blog</Link>
                    <Link to="/read" className="button">View Blogs</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleBlogs = selectBlogs(state.blogs, state.filters);
    return {
        blogCount: visibleBlogs.length,
        blogsTotal: selectBlogsTotal(visibleBlogs)
    }
};

export default connect(mapStateToProps)(BlogSummary);