import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import ArtistCard from "../components/ArtistCard";
import SearchBar from "../components/SearchBar"
import { getToken, setToken } from "../features/token/tokenSlice";

function SearchPage() {

    const dispatch = useDispatch();

    // Search result array
    const [responseArray,setResponseArray] = useState([]);

    //track user's search input
    const [searchInput,setSearchInput] = useState('')

    let token = localStorage.getItem('token');

    let searchUrl = 'https://api.spotify.com/v1/search?';
    let type = 'type=artist'

    useEffect(() => {
        console.log(token)

        // if(token !==null) return

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
        {/* Search artist input */}
        <SearchBar setSearchInput={setSearchInput}/>

        {/* Search result container */}
        <div className="p-5 flex flex-wrap justify-center gap-5">
            {
                responseArray.length?
                <>
                    {
                        responseArray.map(item => (
                            <ArtistCard
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