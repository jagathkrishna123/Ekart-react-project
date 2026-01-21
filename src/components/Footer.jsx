import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const {theme, changeTheme} = useContext(ThemeContext)
  return (
    <div
    style ={{
      background: theme ==="light" ? "#f3f3f3" : "#222",
      color: theme === "light" ? "#222" : "#f3f3f3"
    }}
    >


    <p>this is footer component </p>
    <button onClick={changeTheme} >switch theme</button>
    </div>
  )
}

export default Footer