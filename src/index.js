import React from "react";
import ReactDOM from "react-dom";

import ArticleList from "./components/ArticleList";
const articles = [
  {
    title: "Article1",
    author: "Daniel Turus"
  },
  {
    title: "Article2",
    author: "Daniel Vasile"
  },
  {
    title: "Article3",
    author: "John Doe",
    body: "Long String"
  }
];

function App() {
  return (
    <div className="App">
      <ArticleList articles={articles} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
