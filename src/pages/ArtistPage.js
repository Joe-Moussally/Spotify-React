import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AlbumCard from '../components/AlbumCard';
import { BiArrowBack } from 'react-icons/bi'

function ArtistPage() {

    let params = useParams();

    //get the auth token
    const token = localStorage.getItem('token');

    //track the artis's spotify id
    let artistId = params.artistId;

    //track the artit's albums
    const [albums,setAlbums] = useState([]);

    useEffect(() => {
      //fetch the artist's albums before loading the page
      axios({
        url:'https://api.spotify.com/v1/artists/'+artistId+'/albums',
        method:'GET',
        headers:{
          'Authorization':'Bearer '+token
        }
      }).then((response) => {
        console.log(response.data.items)
        setAlbums(response.data.items)
      })
      
    },[])

  return (
    <div className='p-10'>
        
      {/* artist name title */}
      
      <div className='flex items-center '>
        <BiArrowBack
          size={45}
          className='text-gray-500 mb-2 mr-10 hover:cursor-pointer hover:border-2 rounded-full transition-all duration-300'
          onClick={() => window.history.back()}
        />
        <div className='text-gray-700 text-6xl font-bold pb-5'>{localStorage.getItem('artist')}</div>
      </div>

      <span className='text-4xl text-gray-500 p-5'>{albums.length} Albums</span>

      <div className='mt-14 flex flex-wrap justify-center gap-5'>
        {
          albums.map((album) => (
            <AlbumCard
              imgUrl={album.images[0].url}
              name={album.name}
              artist={localStorage.getItem('artist')}
              tracksNumber={album.total_tracks}
              releaseDate={album.release_date}
              previewUrl={album.external_urls.spotify}
            />
          ))
        }
      </div>

    </div>
  )
}

export default ArtistPage