import axios from "axios";
import { useEffect, useState } from "react"
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar"

function SearchPage() {

    // Search result array
    const [responseArray,setResponseArray] = useState([]);

    //track user's search input
    const [searchInput,setSearchInput] = useState('')

    let token = localStorage.getItem('token');

    let searchUrl = 'https://api.spotify.com/v1/search?';
    let type = 'type=artist'

    useEffect(() => {

        if(token == null || typeof token == 'undefined') {
            window.location.pathname = '/login'
        }
        

        //get the user's access token when redirected to search artist page
        let url = window.location.href;

        let paramString = url.split('#')[1];
        let queryString = new URLSearchParams(paramString);

        for (let pair of queryString.entries()) {
            if(pair[0]==='access_token') {
                // dispatch(setToken({'token':pair[1]}))
                localStorage.setItem('token',pair[1])
            }
        }
    },[])

    useEffect(() => {
        searchArtists(searchInput)
    },[searchInput])

    //function to fetch the artists in search
    const searchArtists = (query) => {
        // if search input is empty -> clear results array
        if(query === '') {
            setResponseArray([])
            return
        }

        //building the GET api Url and storing the response array of artists
        let urlSearch = searchUrl+type+'&q='+query
        axios({
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token
            },
            url:urlSearch
        }).then((response) => {
            setResponseArray(response.data.artists.items)
            // console.log(response.data.artists.items)
        })
    }

  return (
    <>
        <img
            className="absolute top-0 h-[500px] w-[100%] object-cover"
            src="https://wallpapers.com/images/hd/spotify-music-art-1u0fe6tphui1pioz.jpg"
        />
        {/* Search artist input */}
        <SearchBar setSearchInput={setSearchInput}/>

        {/* Search result container */}
        <div className="p-5 mt-[300px] flex flex-wrap justify-center gap-5">
            {
                responseArray.length?
                <>
                    {
                        responseArray.map(item => (
                            <ArtistCard
                                key={item.id}
                                artistId={item.id}
                                artistName={item.name}
                                imageUrl={
                                    (item.images.length !== 0)?
                                    item.images[0].url:
                                    'https://static.thenounproject.com/png/3580649-200.png'
                                }
                                followersCount={item.followers.total}
                                popularity={item.popularity}
                            />
                        ))
                    }
                </>:<></>
            }
        </div>
    </>
  )
}

export default SearchPage