import { ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("item Data is", items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 rounded-lg">
          <div className="py-2">
            <img className="mx-auto" src={ITEM_URL + item.card.info.imageId} alt={item.card.info.name} />
            <span className="block text-center">{item.card.info.name} - ₹ {(item.card.info.price / 100).toFixed(2)}</span>
            <p className="text-xs text-center">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
