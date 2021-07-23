import React from "react";
import { useHistory } from "react-router-dom";

function HomeScreen() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/todo/0")}>시작</button>
    </div>
  );
}

export default HomeScreen;
