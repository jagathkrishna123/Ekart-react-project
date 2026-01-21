import React, { useMemo, useState } from 'react'

const UseMemohookExmple = () => {
    const [number, setNumber] = useState(0);
    const [lastNumber, setLastNumber] = useState(null)

    const double = useMemo(()=>{
        console.log("useMemo working....");
        return number * 2;
    })

    const handleClick = () =>{
        if (number === lastNumber) {
            console.log("UseMemo value is used <<<<<<<<<");
        }
        else{
            console.log("Manually calculating double...");
            setLastNumber(number)
        }
    };

  return (
    <div className='flex flex-col max-w-md w-full bg-cyan-900 text-white rounded-md p-4 items-center justify-center gap-4 m-8'>
        <h1>UseMemo Example</h1>

        <input type="number" value={number} onChange={(e)=> setNumber(Number(e.target.value))} />

        <button className='bg-black p-2 px-3 rounded-md text-white' onClick={handleClick}>Double</button>

        <p>Double of {number}: {double}</p>
    </div>
  )
}

export default UseMemohookExmple