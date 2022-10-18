import axios from 'axios';
import React from 'react'
import { BsSpotify } from 'react-icons/bs'

function LoginPage() {

  //initalizing request url params
  let baseUrl = 'https://accounts.spotify.com/authorize';
  let reponseType = 'response_type=token';
  let clientID = 'client_id=c5ba4daf8b174747949d26aabb8a86b0';
  let redirectUri = 'redirect_uri=http://127.0.0.1:3000/'

  let url = baseUrl;
  url += '?' + reponseType;
  url += '&' + clientID;
  url += '&' + redirectUri;

  //function to handle the login process
  const handleLogin = () => {
    window.location.href = url
  }

  return (
    
    <div
      className='mx-auto mt-[300px] flex items-center border-gray-700 border-solid w-[300px] rounded-lg border-[1.5px] py-2 justify-center cursor-pointer hover:shadow-md transition-shadow scale-110'
      onClick={handleLogin}
    >
        <button className='font-bold mr-5'>Login</button>
        <BsSpotify color='#00e83e' size={24}/>
    </div>
  )
}

export default LoginPage