import { createSlice } from '@reduxjs/toolkit'

export const albumsSlice = createSlice({
    name: 'token',
    initialState: {
      albums: [],
    },
    reducers: {
        setAlbums: (state,action) => {
        state.token = action.payload.albums;
      },
    },
  })
  
// Action creators are generated for each case reducer function
export const { setAlbums } = albumsSlice.actions

  //selector to get the token stored
export const getAlbums  = (state) => (state.albums)
  
export default albumsSlice.reducer