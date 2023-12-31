import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { ITEM_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    console.log("Clearing Cart");
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleRedirectToHome = () => {
    window.location.href = "/"; // Replace "/" with the actual path to your home page.
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.card.info.price || item.card.info.defaultPrice);
  }, 0) / 100;

  return (
    <div className="text-center m-4 p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="text-2xl font-bold bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
          onClick={handleClearAll}
        >
          Clear Cart
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Check if cartItems is not empty */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.card.info.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Card Image */}
              <img
                src={ITEM_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-40 object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.card.info.name}</h2>
                <p className="text-gray-600">
                  ₹
                  {(
                    (item.card.info.price || item.card.info.defaultPrice) /
                    100
                  ).toFixed(2)}
                </p>
                <p className="text-gray-700 mt-2">
                  {item.card.info.description}
                </p>
                {/* Delete Button */}
                <button
                  onClick={() => handleRemoveItem(item.card.info.id)}
                  className="text-sm font-bold bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-lg mt-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Your cart is empty.
            </p>
            <button
              onClick={handleRedirectToHome}
              className="text-2xl font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              See restaurants near you
            </button>
          </div>
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <p className="text-xl font-semibold">Total: ₹{totalAmount.toFixed(2)}</p>
          <button
            className="text-2xl font-bold bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-2"
            onClick={() => {
              // Handle checkout logic here
              console.log("Checkout clicked");
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
