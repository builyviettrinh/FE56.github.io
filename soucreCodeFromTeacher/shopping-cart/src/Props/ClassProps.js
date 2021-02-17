import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    const { cho } = this.props;
    return (
      <div>
        <h3>demo class props</h3>
        <p>name : {cho.name} </p>
        <img src={cho.image} />
        {this.props.children}
      </div>
    );
  }
}

export default ClassProps;
