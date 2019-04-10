import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "./Article"


class ArticleList extends Component {

  render() {
    const { articles } = this.props;
    return (
      {
        articles.map(article => {
          return (
            <Article article={article}></Article>
          )
        })
      }
    )
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
