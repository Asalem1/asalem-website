import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';
import * as styles from './Blog.scss'; // eslint-disable-line

const propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export function BlogClass({ blogs }) {
  return (
    <div>
      <div className="blog">
        <header>
          <div className="blog-header">
            Ariel Salem
          </div>
          <hr />
          <div className="blog-description"> Lover of Tech, Programming, and all things JavaScript </div>
        </header>
      </div>
      <br />
      <div>
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}

BlogClass.propTypes = propTypes;

export default BlogClass;
