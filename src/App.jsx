import React from "react";
import Quiz from "./Quiz";
import './App.css'

function App() {
  return (
<div
  className="App"
  style={{
    border: "2px solid black",
    padding: "50px",
    borderRadius: "10%",
    backgroundColor: "rgba(255, 241, 181, 0.81)"
  }}
>      <h1 className="header">Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
