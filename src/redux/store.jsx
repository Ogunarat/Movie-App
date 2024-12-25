import { configureStore } from '@reduxjs/toolkit'
import genreReducer from './slice/genreSlice'
import movieReducer from './slice/movieSlice'
import movieDetailsReducer from './slice/movieDetailsSlice'

export const store = configureStore({
  reducer: {
    genre:genreReducer,
    movie : movieReducer,
    movieDetail : movieDetailsReducer,
  },
})