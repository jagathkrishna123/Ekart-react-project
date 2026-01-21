import React, { useState } from "react";

const Component2 = ({ myData }) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    myData(text); 
  };

  return (
    <div>
      <h2>Child Component</h2>

      <input
        type="text"
        placeholder="Type something…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
};

export default Component2;
