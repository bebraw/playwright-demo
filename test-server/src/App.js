import React from "react";
import master from "./master";
import "./App.css";

function App() {
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    master("tester").then(setResult).catch(setError);
  }, []);

  return (
    <div className="App">
      <p id="result">{result}</p>
      <p id="error">{error}</p>
    </div>
  );
}

export default App;
