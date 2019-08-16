import React from "react";
import ReactDOM from "react-dom";

//imports
import Quotemaker from "./Quotemaker/Quotemaker.js";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Quotemaker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
