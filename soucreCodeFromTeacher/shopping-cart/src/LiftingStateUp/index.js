import React, { Component } from "react";
import OneChild from "./OneChild";

class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: "Yasuo",
        sayings: "hasagi @@",
        image: "https://i.ytimg.com/vi/87a_v7-8pUI/hqdefault.jpg",
      },
    };
  }

  handleChangeSayings = (sayings) => {
    this.setState({
      hero: {
        name: "Yasuo",
        // sayings: sayings,
        sayings,
        image: "https://i.ytimg.com/vi/87a_v7-8pUI/hqdefault.jpg",
      },
    });
  };

  render() {
    return (
      <div>
        <h2>Demo LiftingStateUp</h2>
        <OneChild
          handleChangeSayings={this.handleChangeSayings}
          hero={this.state.hero}
        />
      </div>
    );
  }
}

export default LiftingStateUp;
