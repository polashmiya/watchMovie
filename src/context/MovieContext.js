import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
//initialState
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//createContext
export const MovieContext = createContext(initialState);

//provider Components
export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //set the movieList in loaclStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const deleteMovieFromWatchList = (id) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const deleteMovieFromWatched = (id) => {
    dispatch({ type: "DELETE_MOVIE_FROM_WATCHED", payload: id });
  };
  return (
    <MovieContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        addMovieToWatched,
        deleteMovieFromWatchList,
        deleteMovieFromWatched,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
