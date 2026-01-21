import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'


const NavBarComp = () => {
    const [open, setOpen] = useState(false) // to  open and close sidebar

  return (
    <div className='  bg-blue-700 text-white py-3'>
        <div className='flex items-center justify-between max-w-7xl w-full mx-auto px-3'>
            <h1 className='font-bold text-3xl'>Logo</h1>

        <ul className='hidden md:flex flex-row gap-4'>
            <Link className='cursor-pointer' to="/">Home</Link>
            <Link className='cursor-pointer' to="/about">About</Link>
            <Link className='cursor-pointer' to="/contact">contact</Link>
        </ul>

        <button className='bg-black p-2 px-3 rounded-md text-white hidden md:block'>Login</button>
        <GiHamburgerMenu onClick={()=> setOpen(true)} className='text-black text-2xl flex md:hidden' />
        
        </div>
        {/* sidebar.............. */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white p-6 transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}>
            <button className='absolute top-4 right-4' onClick={()=> setOpen(false)}>x</button>

            <ul className='flex flex-col gap-3 text-white'>
                <li onClick={()=> setOpen(false)}>Home</li>
                <li onClick={()=> setOpen(false)}>About</li>
                <li onClick={()=> setOpen(false)}>service</li>
                <li onClick={()=> setOpen(false)}>Contact</li>
            </ul>

        </div>
        
    </div>
  )
}

export default NavBarComp