import React, { useEffect, useState } from "react";
import "./Genre.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../../redux/slice/genreSlice";

const Genre = ({ setSelectedGenre }) => {
  const { genres } = useSelector((store) => store.genre);
  const dispatch = useDispatch();
  const [activeGenre, setActiveGenre] = useState(null)

  useEffect(() => {
    dispatch(getGenre());
  }, []);
  const handleGenre = (genre) => {
    setSelectedGenre(genre);
    setActiveGenre(genre.id)
  };

  return (
    <div className="genres">
      <ul>
        {genres &&
          genres.map((genre) => (
            <li
              className={`genre ${activeGenre === genre.id ? "active" :""} `}
              onClick={() => handleGenre(genre)}
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genre;
