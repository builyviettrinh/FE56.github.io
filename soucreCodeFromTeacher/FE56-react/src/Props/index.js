import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {
        name: "lulu",
        image:
          "https://bizweb.dktcdn.net/thumb/large/100/098/550/products/op-silicon-case-cho-husky-cho-tai-nghe-airpods-1-2-9.jpg",
      },
    };
  }
  render() {
    return (
      <div>
        <h2>Demo Props</h2>
        {/* <ClassProps /> */}
        {/* truyền props */}
        <ClassProps cho={this.state.dog}>
          <img src="https://cdn-4.ohay.tv/imgs/abea8fd7cec64bd3a382/728.jpg" />
        </ClassProps>
        <FunctionProps dog={this.state.dog}>
          <h1>this is props children</h1>
        </FunctionProps>
      </div>
    );
  }
}

export default Props;
