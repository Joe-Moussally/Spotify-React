import React, { useEffect, useState } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

function ArtistCard({artistName,followersCount, imageUrl, popularity }) {

    //track stars count state
    const [starsCount,setStarsCount] = useState((5*popularity/100).toFixed(0))

    useEffect(() => {

    },[])

  return (
    <div className='pl-[-10px] w-[200px] border-2 border-gray-400 rounded-sm hover:cursor-pointer hover:shadow-md transition-shadow'>

        {/* Artist image */}
        <img
            src={imageUrl}
            className='h-[200px] object-cover'
        />

        {/* Card details container */}
        <div className='p-3 flex flex-col'>
            <p className='font-bold text-lg'>{artistName}</p>
            <p className='mb-auto text-xs text-gray-500'>{followersCount+' followers'}</p>

            {/* Star count container */}
            <div className='flex mt-1'>
                {
                    Array.from(Array(5), (e,i) => { //for loop from 0 to 5
                        if(starsCount<=i) return <AiOutlineStar color='#d6b600' />
                        else return <AiFillStar color='#d6b600'/>
                    })
                }
            </div>

        </div>

    </div>
  )
}

export default ArtistCard