import React, { useEffect } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../redux/slice/movieDetailsSlice";
import { API_IMG } from "../../components/constasts/api";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const MovieDetails = () => {
  const { id } = useParams();
  const { movieDetails } = useSelector((store) => store.movieDetail);
  const {
    backdrop_path,
    overview,
    release_date,
    title,
    vote_average,
    poster_path,
    genres,
    spoken_languages,
  } = movieDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [id, dispatch]);
  

  return (
    <div className="movie-detail">
      <img
        className="backdrop"
        src={`${API_IMG}/${backdrop_path}`}
        alt={title}
      />
      <header>
        <p>{title}</p>
        <div className="add-favorite-remove">
          <button className="btn remove">
            <span>
              <IoIosRemoveCircle />
            </span>
            <span>Remove Favorite</span>
          </button>

          <button className="btn add">
            <span>
              <FaHeart />
            </span>
            <span>Add Favorite</span>
          </button>
        </div>
      </header>
      <div className="content">
        <div className="left">
          <div className="movie-backdrop_path">
            <img src={`${API_IMG}/${poster_path}`} alt={title} />
          </div>
        </div>
        <div className="right">
          <div className="movie-overview">
            <p>{overview}</p>
          </div>
          <div className="movie-rating">
            <FaStar />
            <p>{vote_average?.toFixed(1)}</p>
          </div>
          <div className="release-date">
            <span>Year:</span>
            <p>{release_date?.substring(0,4)}</p>
          </div>
          <div className="movie-info">
            <div className="movie-genres">
              <span>Genre:</span>
              <ul>
                {genres &&
                  genres.map((genre) => (
                    <li key={genre?.id} className="movie-genre">
                      {genre?.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="movie-languages">
              <span>Language:</span>
              <ul>
                {spoken_languages &&
                  spoken_languages.map((language, index) => (
                    <li key={index}>{language?.english_name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
