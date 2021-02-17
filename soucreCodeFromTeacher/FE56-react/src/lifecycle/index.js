import React, { Component } from "react";
import Child from "./child";
import Child2 from "./child_2";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    //constructor chỉ chạy 1 lần duy nhất
    console.log("constructor");
  }

  UNSAFE_componentWillMount() {
    // Chạy 1 lần duy nhất
    console.log("componentWillMount");
  }

  componentDidMount() {
    /**
     * Chạy 1 lần duy nhất & chạy sau render
     * Gọi api get data
     */
    console.log("componentDidMount");
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextState && nextState.number === 4) {
      return false;
    }
    return true;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  render() {
    // chạy nhiều lần, khi state thay đổi
    console.log("render");
    return (
      <div>
        <h3>LifeCycle</h3>
        <h1>Number: {this.state.number}</h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: ++this.state.number,
            });
          }}
        >
          Click
        </button>

        <Child />
        <Child2 number={this.state.number} />
      </div>
    );
  }
}
