import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import BlogListEntry from './BlogListEntry';
import * as styles from './Blog.scss'; // eslint-disable-line

const propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export function BlogListClass({ blogs }) {
  return (
    <div className="container-fluid">
      <div className="blog-list">
        {
          blogs.map((blog) => {
            const summary = $(blog.description).text();
            if (summary.length > 100) {
              return (
                <div
                  key={blog.title}
                  className="blog-list-item"
                >
                  <BlogListEntry
                    {...blog}
                  />
                </div>
              );
            }
            return <span key={summary} />;
          })
        }
      </div>
    </div>
  );
}

BlogListClass.propTypes = propTypes;

export default BlogListClass;
