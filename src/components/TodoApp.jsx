import React, { useState } from "react"

 
const TodoApp = () => {
    const [task, setTask] = useState("") // for storing text enterd in input form
    const [todos, setTodos] = useState([])// for storing all tasks and disply them later

    const handleAddTodo = () => {
        if(task.trim() === "") return;
        setTodos([...todos,task]) // add newly enterd task to todos array
        setTask("") // empty the input form
    }

    const handleDeleteTodo = (index) => {
        const updatedTodo = todos.filter((item,indx) => indx !== index)
        setTodos(updatedTodo);
    }
    return(
        <div>
            <h1>ToDo App</h1>
            <input type="text" placeholder="enter a task" value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={handleAddTodo}>Add Task</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}> {item}
                    <button onClick={()=>handleDeleteTodo(index)}>delete</button>
                     </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp          