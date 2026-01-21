import React from 'react'
import Bgimg from "../assets/bgimg.jpg"
const HomeComp = () => {
  return (
    <div className='w-full  bg-gray-900 text-white py-20 px-6 h-screen'>
        <div className='max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-10'>
            {/* left div............. */}
            <div className='flex flex-col gap-5 max-w-2xl mx-auto'>
                <h1 className='text-6xl font-bold font-outfit'>Welcome to my website</h1>

                <p className='text-gray-400 text-lg'>Lorem ipsum dolore. Quibusdam sunt harumpsam tempore reprehenderit delectus earum ad quo. Tenetur, culpa?</p>

                <div className='flex flex-row gap-2'>
                    <button className='px-6 py-3 bg-amber-500 text-black rounded-md font-semibold mt-12 max-w-[300px]'>Get Started</button>
                    <button className='px-6 py-3 bg-black text-amber-500 rounded-md font-semibold mt-12 max-w-[300px]'>Login now</button>
                </div>
            </div>

            {/* right div............ */}
            <div className='flex flex-col justify-center p-3'>
                <img src={Bgimg} alt="" className='max-w-xl rounded-md shadow-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default HomeComp