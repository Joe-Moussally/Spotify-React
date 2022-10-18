import React from 'react'
import { BsSpotify } from 'react-icons/bs'

function LoginPage() {
  return (
    
    <div className='mx-auto mt-[30%] flex items-center border-gray-700 border-solid w-[300px] rounded-lg border-[1.5px] py-2 justify-center cursor-pointer hover:shadow-md transition-shadow'>
        <button className='font-bold mr-5'>Login</button>
        <BsSpotify color='#00e83e' size={24}/>
    </div>

  )
}

export default LoginPage