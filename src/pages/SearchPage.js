import axios from "axios";
import { useEffect, useState } from "react"
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar"

function SearchPage() {

    // Search result array
    const [responseArray,setResponseArray] = useState([]);

    let token;
    let searchUrl = 'https://api.spotify.com/v1/search?';
    let type = 'type=artist'

    useEffect(() => {

        //get the user's access token when redirected to search artist page
        let url = window.location.href;

        let paramString = url.split('#')[1];
        let queryString = new URLSearchParams(paramString);

        for (let pair of queryString.entries()) {
            if(pair[0]==='access_token') {
                token = pair[1]
            }
        }

        searchArtists()
    },[])

    //function to fetch the artists in search
    const searchArtists = (searchInput) => {

        let urlSearch = searchUrl+type+'&q=maroon'
        axios({
            method:'GET',
            headers:{
                'Authorization':'Bearer '+token
            },
            url:urlSearch
        }).then((response) => {
            setResponseArray(response.data.artists.items)
            console.log(response.data.artists.items)
        })
    }

  return (
    <>
        {/* Search artist input */}
        <SearchBar />

        {/* Search result container */}
        <div className="p-5 flex flex-wrap justify-center gap-5">
            {
                responseArray.length?
                <>
                    {
                        responseArray.map(item => (
                            <ArtistCard
                                artistName={item.name}
                                imageUrl={
                                    (item.images.length !== 0)?
                                    item.images[0].url:
                                    'https://static.thenounproject.com/png/3580649-200.png'
                                }
                                followersCount={item.followers.total}
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