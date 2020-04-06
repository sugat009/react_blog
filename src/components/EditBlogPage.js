import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startEditBlog, startRemoveBlog } from '../actions/blogs';

export class EditBlogPage extends React.Component {
    onSubmit = (blog) => {
        this.props.startEditBlog(this.props.blog.id, blog);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveBlog({ id: this.props.blog.id });
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Blog</h1>
                    </div>
                </div>
                <div className="content-container">
                    <BlogForm 
                    blog={this.props.blog}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Blog</button>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => {
        return blog.id === props.match.params.id;
    })
});

const mapDispatchToProps = (dispatch) => ({
    startEditBlog: (id, blog) => dispatch(startEditBlog(id, blog)),
    startRemoveBlog: (data) => dispatch(startRemoveBlog(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogPage);