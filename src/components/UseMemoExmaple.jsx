import React, { useMemo, useState } from "react";
const UseMemoExmaple = () => {
  const [number, setNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(null);

  const double = useMemo(() => {
    console.log("useMemo working...");
    return number * 2;
  }, [number]);

  const handleClick = () => {
    if (number === lastNumber) {
      console.log("useMemo value used");
    } else {
      console.log("Manually calculating double...");
      setLastNumber(number);
    }
  };

  return (
    <div>
      <h2>Double Calculator with useMemo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={handleClick}>Double</button>

      <p>Double of {number}: {double}</p>
    </div>
  );
};

export default UseMemoExmaple;


