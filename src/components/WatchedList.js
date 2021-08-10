import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
const WatchedListCard = ({ movie }) => {
  const { deleteMovieFromWatched } = useContext(MovieContext);
  return (
    <div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      ) : (
        <div className="filter-poster"></div>
      )}
      {/* <button
        style={{ marginRight: "10px" }}
        className="btn"
        onClick={() => addMovieToWatched(movie)}
      >
        Add to Watch List
      </button> */}
      <button className="btn" onClick={() => deleteMovieFromWatched(movie.id)}>
        Delete 
      </button>
    </div>
  );
};

export default WatchedListCard;
