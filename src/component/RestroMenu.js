import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestroMenu = () => {
  const [menulist, setMenulist] = useState({});
  const [itemcard, setItemCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showIndex, setShowIndex] = useState();

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.83641491733662&lng=75.2922973036766&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json();

      const itemCards =
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.card;
      console.log(itemCards);

      const categories =
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (c) =>
            c.card.card &&
            c.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setCategories(categories);
      console.log(categories);
      setMenulist(data.data.cards[0].card.card.info);
      setItemCard(itemCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
if(itemcard ===0){
  return "Loading";
}
  return (
    <div className="font-lg m-3 p-3 text-center ">
      <h1 className="font-bold my-6 text-2xl">{menulist.name}</h1>
      <h2 className="font-bold text-lg">{menulist.cuisines}</h2>
      <h1 className="font-bold text-lg">
        Cost For: {menulist.costForTwoMessage}
      </h1>
      <p className="font-bold text-lg">Menu</p>
      {
        <div className="  m-2 py-5">
          {Array.isArray(itemcard) ? (
            itemcard.map((item, index) => (
              <li key={index}>
                {item.card.info.name}
                {"  Rs -"} {item.card.info.price / 100}
              </li>
            ))
          ) : (
            <div></div>
          )}
        </div>
      }
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
  data={category?.card?.card}
  showItem={index === showIndex} // Update the condition here
  setShowIndex={() => setShowIndex(index)}
/>
      ))}
    </div>
  );
};

export default RestroMenu;
