import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import BlogListEntry from './BlogListEntry';

const propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export function BlogListClass({ blogs }) {
  return (
    <div>
      {
        blogs.map((blog) => {
          const summary = $(blog.description).text();
          if (summary.length > 100) {
            return (
              <div className="blog-list">
                <BlogListEntry
                  key={blog.title}
                  {...blog}
                />
              </div>
            );
          }
          return <span />;
        })
      }
    </div>
  );
}

BlogListClass.propTypes = propTypes;

export default BlogListClass;
