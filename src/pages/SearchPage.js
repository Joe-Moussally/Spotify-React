import axios from "axios";
import { useEffect } from "react"
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar"

function SearchPage() {

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
            console.log(response.data)
        })
    }

  return (
    <>
        {/* Search artist input */}
        <SearchBar />

        {/* Search result container */}
        <div className="p-5 flex flex-wrap justify-center gap-5">
            <ArtistCard />
        </div>
    </>
  )
}

export default SearchPage