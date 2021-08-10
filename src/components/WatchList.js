import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieListCard from "./MovieListCard";
const WatchList = () => {
  const { watchlist } = useContext(MovieContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieListCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No Movies In your List , Please add Some Movies
          </h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
