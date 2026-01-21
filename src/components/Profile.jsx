import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const {userName} = useContext(UserContext)
  return (
    <div>
        <p>Profile page</p>
        <p>your name is {userName}</p>
    </div>
  )
}

export default Profile