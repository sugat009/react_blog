import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import getVisibleExpenses from '../selectors/blogs';

export class BlogList extends React.Component {
    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        return (
            <div className="content-container">
                <div className="list-header">
                    <div className="show-for-mobile">Blogs</div>
                    <div className="show-for-desktop">Blog</div>
                    <div className="show-for-desktop">Author</div>
                </div>
                <div className="list-body">
                    {
                        this.props.blogs.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>No Blogs Yet</span>
                            </div>
                        ) : (
                        this.props.blogs.map((blog) => {
                                return <BlogListItem key = {blog.id} {...blog} user={user} />
                        })
                        )
                    }
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    blogs: getVisibleExpenses(state.blogs, state.filters)
});

export default connect(mapStateToProps)(BlogList);