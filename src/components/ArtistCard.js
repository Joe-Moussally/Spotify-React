import React from 'react'

function ArtistCard({artistName,followersCount, }) {
  return (
    <div className='w-[200px] border-[1px] border-gray-400 rounded-sm'>

        {/* Artist image */}
        <img
            src='https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
            className='h-[200px] rounded-tl-sm rounded-tr-sm object-cover'
        />

        {/* Card details container */}
        <div className='p-3'>
            <p>Maroon 5</p>
            <p>1300 followers</p>
        </div>

    </div>
  )
}

export default ArtistCard