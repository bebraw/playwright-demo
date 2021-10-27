import React from "react";
import master from "./master";
import "./App.css";

function App() {
  const [workerResult, setWorkerResult] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    master("tester").then(setWorkerResult).catch(setError);
  }, []);

  return (
    <div className="App">
      <p id="result">{workerResult.result}</p>
      <p id="id">{workerResult.id}</p>
      <p id="error">{error}</p>
    </div>
  );
}

export default App;
