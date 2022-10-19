import React, { useEffect } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

function SearchBar({setSearchInput}) {

  // event listener for text input
  useEffect(() => {

    // on key up -> search results
    document.getElementById('search-input').addEventListener('keyup',(e) => {
      setSearchInput(e.currentTarget.value)
    })
  },[])

  return (
    <div className='mx-auto my-[200px] flex items-center border-gray-400 border-solid max-w-[430px] w-[70%] rounded-lg border-[1.5px] py-2 justify-center cursor-pointer scale-110 px-2 text-gray-700 bg-white'>
        <input
          placeholder='Search for an artists...'
          className='w-[100%] h-[100%] focus:outline-none text-xl'
          id='search-input'
        />
        <BiSearchAlt color='#aaaaaa' size={24}/>
    </div>
  )
}

export default SearchBar