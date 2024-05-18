import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-700 text-white py-6 mb-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to MovieApp</h1>
        <p className="text-lg mt-2">Discover your next favorite movie, show, or documentary</p>
      </div>
    </header>
  );
};

export default Header;