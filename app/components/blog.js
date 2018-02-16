import React from 'react';
import PropTypes from 'prop-types';
import BlogList from './BlogList';
import Footer from './Footer';

const propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export function BlogClass({ blogs }) {
  return (
    <div>
      <div className="blog">
        <header>
          <p className="blog-header">Ariel Salem</p>
          <p className="blog-description"> Lover of Tech, Programming, and all things JavaScript </p>
        </header>
        <hr />
      </div>
      <br />
      <div>
        <BlogList blogs={blogs} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

BlogClass.propTypes = propTypes;

export default BlogClass;
