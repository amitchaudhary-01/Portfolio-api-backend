import React from 'react'

const Contacts = () => {
  return (
    <div className='p-8 max-w-xl mx-auto'>
        <h2 className='text-3xl font-bold mb-4'>Contact Me</h2>

        <form className='space-y-4'>
            <input className='w-full p-2 border' placeholder='Name'/>
            <input className='w-full p-2 border' placeholder='Email'/>
            <textarea className='w-full p-2 border' placeholder='Message'></textarea>

            <button className='bg-blue-400 text-white px-4 py-2'>Send</button>
        </form>

      
    </div>
  )
}

export default Contacts
