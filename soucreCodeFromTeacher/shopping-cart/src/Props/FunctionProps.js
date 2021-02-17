import React from "react";

function FunctionProps(props) {
  console.log(props);
  const { dog } = props;
  return (
    <div>
      <h3>demo function props</h3>
      <p>name : {dog.name} </p>
      <img src={dog.image} />
      {props.children}
    </div>
  );
}

export default FunctionProps;
