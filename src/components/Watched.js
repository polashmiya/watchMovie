import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import WatchedList from "./WatchedList";
const Watched = () => {
  const { watched } = useContext(MovieContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movie</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <WatchedList movie={movie} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">
            No Watched Movies Are Available, Please Watched a Movie First....
          </h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
