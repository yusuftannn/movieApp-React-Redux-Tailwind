import React, { useState } from "react";
import { movies, shows, documentaries } from "../moviesData";
import { Link } from "react-router-dom"; // React Router'dan Link bileşeni ekleniyor
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [cart, setCart] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const sortMovies = (criteria) => {
    const sortedArray = [...sortedMovies].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortedMovies(sortedArray);
  };

  const addToCart = (movie) => {
    const isAlreadyInCart = cart.some((item) => item.id === movie.id);

    if (!isAlreadyInCart) {
      setCart([...cart, movie]);
    }
  };

  const renderCategory = (title, items) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 w-60 flex-shrink-0 relative"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.year}</p>
            <Link to={`/movie/${item.id}`} className="block mt-2 text-blue-500 hover:underline">Details</Link>
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-slate-800 w-full overflow-y-auto p-4">
      <Header />
      <div className="container mx-auto pt-5">
        <h1 className="text-2xl font-bold text-white mb-4">Movies</h1>
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => sortMovies("title")}
          >
            Sort by Title
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => sortMovies("year")}
          >
            Sort by Year
          </button>
        </div>
        <div className="flex flex-wrap justify-start">
          {sortedMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg p-4 m-2 w-60 flex-shrink-0 relative"
            >
              <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
              <p className="text-gray-600">{movie.year}</p>
              <Link to={`/movie/${movie.id}`} className="block mt-2 text-blue-500 hover:underline">Details</Link>
              <button
                className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(movie);
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
        {renderCategory("Popular Shows", shows)}
        {renderCategory("Popular Documentaries", documentaries)}
      </div>
      <Footer />
      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-semibold mb-2">{selectedMovie.title}</h2>
            <p className="text-gray-600 mb-4">{selectedMovie.year}</p>
            <p className="text-gray-800">{selectedMovie.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Home;
