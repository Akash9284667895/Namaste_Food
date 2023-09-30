import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 relative hover:shadow-md focus:shadow-md active:shadow-lg"
        >
          <div className="py-2">
            <img
              className="mx-auto rounded-lg"
              src={ITEM_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="absolute top-2 right-2 bg-blue-500 text-white px-2 my-5 py-1 rounded-full hover:bg-blue-600 hover:text-gray-100" onClick={()=>handleAddItem(item)}>
              Add +
            </button>
            <span className="block text-center">
              {item.card.info.name} - ₹{" "}
              {(
                (item.card.info.price || item.card.info.defaultPrice) / 100
              ).toFixed(2)}
            </span>
            <p className="text-xs text-center">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
