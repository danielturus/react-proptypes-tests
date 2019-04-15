import React, { Component } from "react";
import PropTypes from "prop-types";

class Article extends Component {
  render() {
    const { article } = this.props;
    return (
      <div>
        <h1>{article.title}</h1>
        <small>{article.author}</small>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })
};

export default Article;
