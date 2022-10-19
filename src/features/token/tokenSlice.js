import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload.token;
    },
  },
})
  
// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions

//selector to get the token stored
export const getToken  = (state) => (state.token.token)
  
export default tokenSlice.reducer