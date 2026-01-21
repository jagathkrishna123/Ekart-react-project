import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-white px-6 py-20 grid grid-cols-1 md:grid-cols-2'>
        {/* image section */}
        <div className='flex items-center justify-center'>
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="" className='rounded-xl shadow-lg w-full max-w-md' />
        </div>

        {/* contact form */}

        <div className='flex flex-col justify-center px-4 mt-10 md:mt-0'>
            <h1 className='text-4xl font-bold text-gray-800 mb-6'>Get in Touch</h1>
            <p className='text-gray-600 mb-8 leading-7'>Let’s talk about ideas, projects or collaborations. We’d love to hear
          from you!</p>

          <form className='space-y-4'>
            <input type="text" placeholder='enter your name' className='w-full border border-gray-400 rounded-lg p-3 focus:outline-none' />
            <input type="text" placeholder='enter your email' className='w-full border border-gray-400 rounded-lg p-3 focus:outline-none' />
            <textarea type="text" placeholder='enter your your message' className='w-full border border-gray-400 rounded-lg p-3 focus:outline-none' />
            <button className='w-[200px] bg-black text-white py-3 rounded-lg hover:bg-gray-900 font-medium'>Send</button>
          </form>
        </div>
    </div>
  )
}

export default Contact