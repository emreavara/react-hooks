import React, { useState } from "react";

function App() {
  const [name, setName] = useState("name");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>Name : </label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your Name"
      ></input>
      <h3>Your Name is : {name}</h3>
    </div>
  );
}

export default App;
