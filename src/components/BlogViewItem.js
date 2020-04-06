import React from 'react';
import moment from 'moment';

const BlogViewItem = () => (
    <div>
        <div>
            <h3 className="list-item__title">{title}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format("MMMM Do, YYYY")}</span>
        </div>
        <h3 className="list-item__data">{user.displayName}</h3>
    </div>
);

export default BlogViewItem;
