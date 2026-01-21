import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/user' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to='/user/profile' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <p className='hidden md:inline-block'>My profile</p>
        </NavLink>

        <NavLink  to='/user/bookings' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <p className='hidden md:inline-block'>Bookings</p>
        </NavLink>
    </div>
  )
}

export default Sidebar