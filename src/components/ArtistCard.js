import React from 'react'

function ArtistCard({artistName,followersCount, imageUrl }) {
  return (
    <div className='w-[200px] border-[1px] border-gray-400 rounded-sm hover:cursor-pointer hover:shadow-md transition-shadow'>

        {/* Artist image */}
        <img
            src={imageUrl}
            className='h-[200px] rounded-tl-sm rounded-tr-sm object-cover'
        />

        {/* Card details container */}
        <div className='p-3'>
            <p className='font-bold text-lg'>{artistName}</p>
            <p className='text-xs text-gray-500'>{followersCount+' followers'}</p>
        </div>

    </div>
  )
}

export default ArtistCard