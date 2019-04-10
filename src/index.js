import React from "react";
import ReactDOM from "react-dom";

import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <ArticleList
        articles={[
          {
            title: "Article1",
            author: "Daniel Turus"
          }
        ]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
