import React, { useState } from "react";
import Component2 from "./Component2";

const Component = () => {
  const [message, setMessage] = useState("");

  const handleData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1> Component1</h1>

      <p>Message: {message}</p>

     
      <Component2 myData={handleData} />
    </div>
  );
};

export default Component;
