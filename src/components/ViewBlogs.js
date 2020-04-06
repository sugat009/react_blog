import React from 'react';
import { connect } from 'react-redux';
import { getStartBlog } from '../actions/blogs';
import BlogViewItem from './BlogListItem';

export class ViewBlogs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        };
    }
    componentDidMount = () => {
        this.props.getStartBlog();
        console.log(this.props.blogs);
    }
    render() {
        console.log(this.props.blogs);
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
                                return <BlogViewItem key = {blog.id} {...blog} user={this.state.user} />
                        })
                        )
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    blogs: state.blogs    
});

const mapDispatchToProps = (dispatch) => ({
    getStartBlog: () => dispatch(getStartBlog())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewBlogs);