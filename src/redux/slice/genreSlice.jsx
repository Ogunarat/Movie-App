import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_GENRE, API_KEY } from '../../components/constasts/api'

const initialState = {
  genres : [],
}
export const getGenre = createAsyncThunk("getGenre",async()=>{
    const response = await axios.get(`${API_GENRE}?api_key=${API_KEY}`)
    return response.data.genres
})


export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder.addCase(getGenre.fulfilled,(state,actions)=>{
        state.genres = actions.payload
    })
  }
})


export const { } = genreSlice.actions

export default genreSlice.reducer