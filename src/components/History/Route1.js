import React from "react";
import { useHistory } from "react-router-dom";

export default function Route1() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/history/route2");
  };

  return (
    <div>
      <h1>Route1</h1>
      <button onClick={handleClick}>Go to next step</button>
    </div>
  );
}
