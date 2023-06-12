import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    );
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setCurrentMovie(data);
    }
  };

  const MovietoNetflix = () => {
    window.location.href = "https://www.netflix.com/in/";
  };
  return (
    <div className="movie_detail">
      {currentMovie && (
        <>
          <h2 className="movie_title">{currentMovie.title}</h2>
          <div className="movie_info">
            <div className="movie_info_item">
              <strong>Release Date:</strong> {currentMovie.release_date}
            </div>
            <div className="movie_info_item">
              <strong>Runtime:</strong> {currentMovie.runtime} minutes
            </div>
            <div className="movie_info_item">
              <strong>Rating:</strong> {currentMovie.vote_average}
            </div>
          </div>
          <img
            className="backdrop_image"
            src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
            alt="Backdrop"
          />
          <div className="poster_section">
            <img
              className="poster_image"
              src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
              alt="Poster"
            />
          </div>
          <p className="movie_overview">{currentMovie.overview}</p>
          <div className="MovieWatchNow">
            <button onClick={MovietoNetflix}>Watch Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
