import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {  API_KEY, API_MOVİE } from '../../components/constasts/api'

const initialState = {
  movies : [],
  status: 'idle',
  error: null,
}
export const getMovie = createAsyncThunk("getMovie",async()=>{
    const response = await axios.get(`${API_MOVİE}?api_key=${API_KEY}`)
    return response.data.results
})
export const getMovieByGenre = createAsyncThunk("getMovieByGenre",async(id)=>{
  const response = await axios.get(`${API_MOVİE}?api_key=${API_KEY}&with_genres=${id}`)
  return response.data.results
})


export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder.addCase(getMovie.pending,(state,actions)=>{
      state.status = actions.meta.requestStatus
    })
    builder.addCase(getMovie.fulfilled,(state,actions)=>{
        state.status = actions.meta.requestStatus
        state.movies = actions.payload
    })
    builder.addCase(getMovie.rejected,(state,actions)=>{
      state.status = actions.meta.requestStatus
      state.error = actions.error.message
    })
    builder.addCase(getMovieByGenre.pending,(state,actions)=>{
      state.status = actions.meta.requestStatus
    })
    builder.addCase(getMovieByGenre.fulfilled,(state,actions)=>{
      state.status = actions.meta.requestStatus
      state.movies = actions.payload
    })
    builder.addCase(getMovieByGenre.rejected,(state,actions)=>{
      state.status = actions.meta.requestStatus
      state.error = actions.error.message
    })
  }
})


export const { } = movieSlice.actions

export default movieSlice.reducer