import React from "react";
import { useHistory } from "react-router-dom";

export default function Start() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/history/route1");
  };

  return (
    <div>
      <h1>Start Route</h1>
      <button onClick={handleClick}>Go to next step</button>
    </div>
  );
}
