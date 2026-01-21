import React, { useState } from "react"
import ShowCount from "./ShowCount";


const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrementFunc = () => {
        setCount(count + 1)
    }


    return(
        <div>
            <p>{count}</p>
            <ShowCount increaseCount = {handleIncrementFunc}/>
        </div>
    )
}
export default Counter