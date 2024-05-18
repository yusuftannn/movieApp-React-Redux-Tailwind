import React, { useState } from "react";
import { movies, categories } from "../moviesData";
import Footer from "../components/Footer"

const Movies = () => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");

  const sortMovies = (criteria) => {
    const sortedArray = [...sortedMovies].sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
    setSortedMovies(sortedArray);
  };

  const onSearchHandler = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSortedMovies(filteredMovies);
  };

  const onResetHandler = () => {
    setSearchTerm("");
    setSortedMovies(movies);
  };

  const renderCategory = (category) => (
    <div key={category} className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedMovies
          .filter((movie) => movie.category === category)
          .map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-600">{movie.year}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-800 w-full pt-7">
      <div className="w-full flex items-center justify-center mb-6">
        <input
          type="text"
          placeholder="Type a movie name..."
          className="text-[19px] mr-4 outline-none rounded-md p-2 w-[40%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="border border-white rounded-md p-2 text-white font-bold mr-2"
          onClick={onSearchHandler}
        >
          Search
        </button>
        <button
          className="border border-white rounded-md p-2 text-white font-bold"
          onClick={onResetHandler}
        >
          Reset
        </button>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Movies</h1>
          <div>
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
        </div>
        {categories.map((category) => renderCategory(category))}
      </div>
      <Footer/>
    </div>
  );
};

export default Movies;