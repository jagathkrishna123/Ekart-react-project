import React, { useReducer, useState } from 'react'


function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {count: state.count + 1}
        
        case "decrement":
            return {count: state.count - 1}

        default:
            return state;
    }
}


const UseReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0})
    // const [state, setState] = useState(initialvalue) 

    function Incrementfn () {
       dispatch({ type: "increment"})
    }

    function Decrementfn () {
        dispatch({type: "decrement"})
    }

  return (
    <div>
        <h1>useReducer example</h1>
        <p>{state.count}</p>
        <button onClick={Incrementfn}> incrmnt</button>
        <button onClick={Decrementfn}>decrmnt</button>
    </div>
  )
}

export default UseReducerExample