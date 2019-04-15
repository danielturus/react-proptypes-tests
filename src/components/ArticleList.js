import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Article";

class ArticleList extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div>
        {articles.map(article => (
          <Article article={article} key={article.title} />
        ))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
