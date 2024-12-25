import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {  API_KEY, API_MOVIE_DETAİLS,} from '../../components/constasts/api'

const initialState = {
    movieDetails : {},
    status: 'idle',
    error: null,
  }
  export const getMovieDetails = createAsyncThunk("getMovieDetails",async(id)=>{
    const response = await axios.get(`${API_MOVIE_DETAİLS}/${id}?api_key=${API_KEY}`)
    return response.data
})
export const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
     
    },
    extraReducers:(builder)=>{
      builder.addCase(getMovieDetails.pending,(state,actions)=>{
        state.status = actions.meta.requestStatus
      })  
      builder.addCase(getMovieDetails.fulfilled,(state,actions)=>{
        state.status = actions.meta.requestStatus
        state.movieDetails = actions.payload
      })
      builder.addCase(getMovieDetails.rejected,(state,actions)=>{
        state.status = actions.meta.requestStatus
        state.error = actions.error.message
      })
    }
  })
  
  
  export const { } = movieDetailsSlice.actions
  
  export default movieDetailsSlice.reducer