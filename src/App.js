import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
  // button
  // const [status, setStatus] = useState("Not Delivered");
  // checkbox
  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* button */}
      {/* <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button> */}
      {/* checkbox */}
      <input type="checkbox" 
      value={checked}
      onChange={() => setChecked((checked) => !checked)}
      /><p>
      {checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
