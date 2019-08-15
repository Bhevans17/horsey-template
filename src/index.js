import React from "react";
import ReactDOM from "react-dom";

//imports
import Navbar from "./Navbar/Navbar.js";
import Quotemaker from "./Quotemaker/Quotemaker.js";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        <Quotemaker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
