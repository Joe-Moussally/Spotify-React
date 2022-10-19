import React from 'react'

function AlbumCard({imgUrl,name,artist,tracksNumber,releaseDate,previewUrl}) {
  return (
        //   Albums container
        <div className='flex flex-col justify-between border-[1.1px] w-[200px] border-gray-200 border-b-0 rounded-[5px]'>
        <div>
          {/* Album image */}
          <img
            src={imgUrl}
            className='w-[220px] object-cover rounded-t-[5px]'
          />
  
              
            {/* Album details */}
            <div className='p-2 pb-auto'>
              <div className='font-semibold text-lg'>{name}</div>
              <div className='text-gray-600 text-sm pb-3'>{artist}</div>
              <div className=' text-gray-600 text-sm font-bold'>{tracksNumber} tracks</div>
              <div className='text-xs text-right'>{releaseDate}</div>
            </div>
    

          </div>
            {/* Preview on spotify button */}
            <div
              className='rounded-b-[5px] text-center py-2 border-2 border-green-400 bg-green-400 text-white font-bold hover:text-green-400 hover:bg-white transition-colors duration-300 hover:cursor-pointer hover:border-green-300 hover:border-2 w-[200px] -translate-x-[1px]'
              onClick={() => {window.location.href = previewUrl}}
            >Preview on Spotify</div>
        </div>
  )
}

export default AlbumCard