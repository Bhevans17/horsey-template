import React from "react";

import "../sass/Quotemaker.scss";

const quotesList = [
  '"Children really brighten up a household. They never turn the lights off." - Ralph Bus',
  '"Always remember that true beauty comes from within - from within bottles, jars, compacts, and tubes." - Peters Almanac  ',
  '"Son, if you really want something in this life, you have to work for it. Now quiet! Theyre about to announce the lottery numbers." - Homer Simpson',
  '"I always wanted to be somebody, but now I realize I should have been more specific." - Lily Tomlin',
  '"I am not a vegetarian because I love animals; I am a vegetarian because I hate plants." - A. Whitney Brown',
  '"What are the three words guaranteed to humiliate men everywhere? Hold my purse. - Unknown',
  '"Giving birth is like taking your lower lip and forcing it over your head." - Carol Burnett',
  '"If you cant see the bright side of life, polish the dull side." - Unknown',
  '"On the keyboard of life, always keep one finger on the Escape key." - Unknown',
  '"Dont worry about the world coming to an end today. It is already tomorrow in Australia." - Charles Schulz'
];

let i = 0;

export default class Quotemaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotesList[0]
    };
    this.nextQuote = this.nextQuote.bind(this);
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
            <blockquote id="new-quote">{this.state.currentQuote}</blockquote>
          </div>
          <div class="button-wrapper">
            <a href="#" class="button is-primary" onClick={this.nextQuote}>
              Next
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// user clicks nextbutton
// array displays next item in array
