import React, { useEffect } from 'react'
import "./MovieList.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMovie, getMovieByGenre } from '../../redux/slice/movieSlice';
import MovieItem from './MovieItem';
import Loading from '../loading/Loading';

const MovieList = ({selectedGenre}) => {
    const dispatch = useDispatch();
    const {movies,status,error} = useSelector((store)=>store.movie);
    
    useEffect(()=>{
        if(!selectedGenre){
          dispatch(getMovie());
        }else{
          dispatch(getMovieByGenre(selectedGenre.id))
        }
    },[selectedGenre,dispatch])
  return (
    <div className='movieList'>
        <h1>{`${selectedGenre ? selectedGenre.name : 'Discover'}`}</h1>
        <div>
        {
                status === 'fulfilled' 
                ? movies && movies.map((movie)=>(
                    <MovieItem key={movie.id} movie={movie}/> 
                )) 
                : status === 'pending' ? <Loading /> 
                : <p>{error}</p>

                
            }
        </div>
        
    </div>
  )
}

export default MovieList