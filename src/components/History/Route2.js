import React from "react";
import { useHistory } from "react-router-dom";

export default function Route2() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/history/end");
  };

  return (
    <div>
      <h1>Route2</h1>
      <button onClick={handleClick}>Go to next step</button>
    </div>
  );
}
