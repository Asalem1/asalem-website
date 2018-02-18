import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import * as styles from './Blog.scss'; // eslint-disable-line

export default class BlogListEntry extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
    };
  }

  componentDidMount() {
    this.renderTitle();
    this.renderSummary();
  }

  renderTitle() {
    const { title } = this.props;
    const replaced = {
      '&lt;': '<',
      '&amp;': '&',
    };
    const reg = new RegExp(Object.keys(replaced).join('|'), 'gi');
    const newTitle = title.replace(reg, (matched) => {
      return replaced[matched];
    });
    this.setState({ title: newTitle });
  }

  renderSummary() {
    const summary = $(this.props.description).text();
    const newSummary = `${summary.substring(0, 551)} ...`;
    this.setState({ summary: newSummary });
  }

  render() {
    const { link } = this.props;
    return (
      <div className="blog-list-entry">
        <a
          target="_blank"
          href={link}
          className="blog-link"
        >
          <div className="blog-title">
            {this.state.title}
          </div>
          <div className="blog-summary">
              {this.state.summary}
          </div>
        </a>
      </div>
    );
  }
}

