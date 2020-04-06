import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItem = ({ id, title, content, createdAt, user }) => (
    <Link to={`/edit/${id}`} className="list-item">
        <div>
            <h3 className="list-item__title">{title}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format("MMMM Do, YYYY")}</span>
        </div>
        <h3 className="list-item__data">{user.displayName}</h3>
    </Link>
);

export default BlogListItem;