import React, { Component } from 'react';
import $ from 'jquery';
import BlogList from './BlogList';
import './Blog.scss';

export class BlogClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentWillMount() {
    this.getBlogs();
  }

  getBlogs() {
    const data = {
      rss_url: 'https://medium.com/feed/@ariel.salem1989',
    };
    $.get('https://api.rss2json.com/v1/api.json', data, (res) => {
      if (res.status === 'ok') {
        this.setState({ blogs: res.items });
      }
    });
  }
  render() {
    const { blogs } = this.state;
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
}

export default BlogClass;
