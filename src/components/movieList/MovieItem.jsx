import React from "react";
import "./MovieItem.css";
import { API_IMG } from "../constasts/api";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const { id, poster_path, title, vote_average, release_date } = movie;
  
  return (
    <Link to={`/movie-details/${id}`}>
      <div className="movieItem">
        <div className="movie-image">
          <img src={`${API_IMG}/${poster_path}`} alt={title} />
        </div>
        <div className="movie-info">
          <p>{vote_average.toFixed(1)}</p>
          <span>
            <FaStar />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
