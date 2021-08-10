import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
const MovieListCard = ({ movie }) => {
  const { addMovieToWatched, deleteMovieFromWatchList, watched } =
    useContext(MovieContext);
  const newStoredMovie = watched.find((obj) => obj.id === movie.id);
  const watchedBtnDisabled = newStoredMovie ? true : false;
  return (
    <div>
      {movie.poster_path ? (
        <Link to="moviedetails">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </Link>
      ) : (
        <div className="filter-poster"></div>
      )}
      <button
        style={{ marginRight: "10px" }}
        className="btn"
        disabled={watchedBtnDisabled}
        onClick={() => addMovieToWatched(movie)}
      >
        Watched
      </button>
      <button
        className="btn"
        onClick={() => deleteMovieFromWatchList(movie.id)}
      >
        X
      </button>
    </div>
  );
};

export default MovieListCard;
