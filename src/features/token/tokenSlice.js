import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
      token: '',
    },
    reducers: {
      setToken: (state,action) => {
        console.log('STATE',state.token)
        console.log('ACTION',action.payload.token)
        state.token = action.payload.token;
      },
    },
  })
  
// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions

  //selector to get the token stored
export const getToken  = (state) => (state.token.token)
  
export default tokenSlice.reducer