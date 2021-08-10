import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
const MovieCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(MovieContext);

  //for disabled btn if the movie is in the movieList and Watched
  const storeMovie = watchlist.find((obj) => obj.id === movie.id);
  const addWatchBtnDisabled = storeMovie ? true : false;
  const storeWatchedMovie = watched.find((obj) => obj.id === movie.id);
  const addWatchedBtnDisabled = storeWatchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <Link to="/moviedetails">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </Link>
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="control">
          <button
            style={{ marginRight: "10px" }}
            className="btn"
            disabled={addWatchBtnDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add To WatchList
          </button>
          <button
            className="btn"
            disabled={addWatchedBtnDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add To Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
