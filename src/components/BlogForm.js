import React from 'react';
import moment from 'moment';

export default class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.blog ? props.blog.title : '',
            content: props.blog ? props.blog.content : '',
            createdAt: props.blog ? moment(props.blog.createdAt) : moment(0),
            errors: ''
        };
    };
    contentChange = (e) => {
        const content = e.target.value;
        this.setState({
            content
        });
    };
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState({
            title
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.content) {
            this.setState({
                errors: "Both title and content are required!"
            });
        } else {
            this.setState(() => ({ errors: ''}));
            if (moment(this.state.createdAt).isSame(moment(0))) {
                this.props.onSubmit({
                    title: this.state.title,
                    content: this.state.content,
                    createdAt: moment().valueOf()
                });
            } else {
                this.props.onSubmit({
                    title: this.state.title,
                    content: this.state.content
                });
            }
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                {this.state.errors && <p className="form__error">{this.state.errors}</p> }
                <input 
                    className="text-input"
                    type="text"
                    placeholder="Blog Title"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <textarea 
                    className="text-area"
                    placeholder="Blog Content"
                    value={this.state.content}
                    onChange={this.contentChange}
                />
                <div>
                    <button className="button">Save Blog</button>
                </div>
            </form>
        )
    };
};