import { useSelector } from "react-redux";
import { ITEM_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
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
                  ₹{((item.card.info.price || item.card.info.defaultPrice) / 100).toFixed(2)}
                </p>
                <p className="text-gray-700 mt-2">
                  {item.card.info.description}
                </p>
                {/* Add more details as needed */}
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
