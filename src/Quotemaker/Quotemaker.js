import React from "react";

const quotesList = [
  "quote 1",
  "quote 2",
  "quote 3",
  "quote 4",
  "quote 5",
  "quote 6",
  "quote 7",
  "quote 8",
  "quote 9",
  "quote 10"
];

let index = 2;

export default class Quotemaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotesList[0]
    };
  }

  prevQuote() {
    this.state.currentQuote.setState({ currentQuote: quotesList - 1 });
  }

  nextQuote() {
    this.state.currentQuote.setState({ currentQuote: quotesList + 1 });
  }

  render() {
    return (
      <div class="quote-container">
        <div class="quote-wrapper">
          <div class="quotes">
            <blockquote>{this.state.currentQuote}</blockquote>
          </div>
          <div class="button-wrapper">
            <button onClick={this.prevQuote}>Previous</button>
            <button onClick={this.nextQoute}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

// user clicks nextbutton
// array displays next item in array
