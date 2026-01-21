import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Homee = () => {
    const {setUserName} = useContext(UserContext)
  return (
    <div>
        <p className='font-bold'>Home Component</p>

        <button onClick={()=> setUserName("sananth")}>change username</button>
    </div>
  )
}

export default Homee