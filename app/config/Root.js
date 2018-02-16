import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import $ from 'jquery';
import Navigation from '../components/navbar';
import Blog from '../components/Blog';
import App from '../components/App';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
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
      <Router>
        <div>
          <Navigation />
          <div>
            <Route exact path="/" component={App} />
            <Route
              path="/blog"
              render={() => (
                <Blog blogs={blogs} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}
