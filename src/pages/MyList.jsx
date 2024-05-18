import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slice/general-slice";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MyList = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="h-screen bg-slate-800 w-full overflow-y-auto p-4">
      <Header />
      <div className="container mx-auto pt-5">
        <h1 className="text-2xl font-bold text-white mb-4">My List</h1>
        <div className="flex flex-wrap justify-start">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 m-2 w-60 flex-shrink-0 relative"
            >
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.year}</p>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
