import React, { useState } from "react";
import { movies, shows, documentaries } from "../moviesData";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [cart, setCart] = useState([]);

  const sortMovies = (criteria) => {
    const sortedArray = [...sortedMovies].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortedMovies(sortedArray);
  };

  const addToCart = (movie) => {
    // Sepette zaten bu film var mı kontrol et
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
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => addToCart(item)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );

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
              <button
                className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => addToCart(movie)}
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
    </div>
  );
};

export default Home;
