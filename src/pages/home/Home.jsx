import React, { useState } from 'react'
import "./Home.css"
import Genre from '../../components/genre/Genre'
import MovieList from '../../components/movieList/MovieList'

const Home = () => {
  const [selectedGenre,setSelectedGenre] = useState(null)
  return (
    <div>
      <Genre setSelectedGenre={setSelectedGenre}/>
      <MovieList selectedGenre={selectedGenre}/>
    </div>
  )
}

export default Home