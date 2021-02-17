import React, { Component } from "react";

export default class Child2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberChild: 0,
    };
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     console.log(nextProps);
  //   }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("getDerivedStateFromProps", nextProps, currentState);
    if (nextProps && nextProps.number) {
      return {
        numberChild: nextProps.number,
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3>Child2</h3>
        <h1>
          Number Parent: {this.props.number} - Number Child:
          {this.state.numberChild}
        </h1>
      </div>
    );
  }
}
