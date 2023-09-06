import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [menulist, setMenulist] = useState({});
  const [itemcard, setItemCard] = useState([]);

  const {resId}= useParams();
  console.log(resId)
  useEffect(() => {
    menuData();
  }, []);

  const menuData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.83641491733662&lng=75.2922973036766&restaurantId=109034&catalog_qa=undefined&submitAction=ENTER"
      );
      const data = await response.json();

      const itemCards =
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;

      setMenulist(data.data.cards[0].card.card.info);
      setItemCard(itemCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="font-lg m-3 p-3">
      <h1>{menulist.name}</h1>
      <h2>{menulist.cuisines}</h2>
      <h1>Cost For: {menulist.costForTwoMessage}</h1>
      <p>Menu</p>
      <div className=" font-bold m-2 py-5">
      {Array.isArray(itemcard) ? (
        itemcard.map((item, index) => (
          <li key={index}>{item.card.info.name}{"  Rs -"} {item.card.info.price/100}</li>
        ))
      ) : (
        <div>No menu items available</div>
      )}
      </div>
    </div>
  );
};

export default RestroMenu;
