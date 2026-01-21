import React, { useState } from "react"


const Home = () => {
    const[name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name){
            alert("please Enter a name");
            return
        }
        alert(`Heloo ${name}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="enter a name" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            
        </div>
    )
}
export default Home