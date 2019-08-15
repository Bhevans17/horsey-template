import React from "react";

import "../sass/Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div class="nav-links">
          <a href="https://codesandbox.io/s/nice-chatterjee-5oc1q#">Home</a>
          <a href="https://codesandbox.io/s/nice-chatterjee-5oc1q">About</a>
          <a href="https://codesandbox.io/s/nice-chatterjee-5oc1q">Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
