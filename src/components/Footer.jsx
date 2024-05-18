import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MovieApp. All rights reserved. Developed by Yusuf</p>
        <p>
          Follow us on
          <a href="https://twitter.com" className="text-blue-400 ml-2">Twitter</a>,
          <a href="https://facebook.com" className="text-blue-600 ml-2">Facebook</a>,
          <a href="https://instagram.com" className="text-pink-400 ml-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;