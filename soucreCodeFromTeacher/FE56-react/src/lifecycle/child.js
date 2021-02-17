import React, { PureComponent } from "react";

export default class Child extends PureComponent {
  render() {
    console.log("render - child");
    return (
      <div>
        <h3>Child Component</h3>
      </div>
    );
  }
}
