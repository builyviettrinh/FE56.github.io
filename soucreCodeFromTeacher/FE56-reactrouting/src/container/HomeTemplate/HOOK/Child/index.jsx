import React, { memo } from "react";

function Child() {
  console.log("run Child");
  return <div>Child</div>;
}

export default memo(Child);
