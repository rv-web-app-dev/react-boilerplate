import React from "react";
import { useHistory } from "react-router-dom";

export default function End() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/history/start");
  };

  return (
    <div>
      <h1>Start Route</h1>
      <button onClick={handleClick}>Go to next step</button>
    </div>
  );
}
