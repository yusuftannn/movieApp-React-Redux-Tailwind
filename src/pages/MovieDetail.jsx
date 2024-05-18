import React from "react";
import { movies } from "../moviesData";

const MovieDetail = ({ match }) => {
  const { movieId } = match.params;
  const movie = findMovieById(movieId); 

  if (!movie) {
    return <div>Film bulunamadı!</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full text-white">
      <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-4">{movie.year}</p>
      <p className="text-gray-800">{movie.description}</p>
    </div>
  );
};

export default MovieDetail;

// moviesData.js dosyasında movies verisinin olduğunu varsayalım
// Bu fonksiyon, movies verisinden belirli bir movieId'ye göre filmi bulur
const findMovieById = (movieId) => {
  return movies.find((movie) => movie.id === parseInt(movieId));
};








