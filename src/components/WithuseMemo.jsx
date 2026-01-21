 

 import React, { useMemo, useState } from 'react';

const WithuseMemo = () => {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // useMemo – runs only when num1 or num2 changes
  const sum = useMemo(() => {
    console.log("calculating...");
    return Number(num1) + Number(num2);
  }, [num1, num2]);

  return (
    <div className="bg-cyan-500 max-w-lg mx-3 p-4 rounded">
      <h2>UseMemo Example With Result Button</h2>

      <input 
        type="number"
        placeholder="enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="block mb-2 p-2 rounded"
      />

      <input 
        type="number"
        placeholder="enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="block mb-2 p-2 rounded"
      />

      <button
        onClick={() => setShowResult(true)}
        className="bg-blue-700 text-white px-4 py-2 rounded mt-3"
      >
        Show Result
      </button>

      {showResult && (
        <p className="mt-3 text-lg font-semibold">Sum: {sum}</p>
      )}
    </div>
  );
};

export default WithuseMemo;
