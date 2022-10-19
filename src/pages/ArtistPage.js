import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getToken } from '../features/token/tokenSlice';

function ArtistPage() {

    let params = useParams();

    //get the auth token
    const token = useSelector(getToken);

    //track the artis's spotify id
    const [artistId ,setArtistId] = useState(params.artistId);

    useEffect(() => {
      //fetch the artist's albums before loading the page
      axios({
        url:'https://api.spotify.com/v1/artists/'+artistId+'/albums',
        method:'GET',
        headers:{
          'Authorization':'Bearer '+token
        }
      }).then((response) => {
        console.log(response.data)
      })

    },[])

  return (
    <div>
        ARTIST ALBUMS
    </div>
  )
}

export default ArtistPage