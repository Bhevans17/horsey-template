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

let i = 0;

export default class Quotemaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotesList[0]
    };
    
    this.prevQuote = this.prevQuote.bind(this);
    this.nextQuote = this.nextQuote.bind(this);
  }

  prevQuote() {
    i = i - 1; // increase i by one
    i = quotesList.length % i; // if we've gone too high, start from `0` again
    return this.setState({ currentQuote: quotesList[i] }); // give us back the item of where we are now
  }

  nextQuote() {
    i = i + 1; // increase i by one
    i = i % quotesList.length; // if we've gone too high, start from `0` again
    return this.setState({ currentQuote: quotesList[i] }); // give us back the item of where we are now
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
            <button onClick={this.nextQuote}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

// user clicks nextbutton
// array displays next item in array
