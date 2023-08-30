import { useEffect, useState } from "react";

const RestroMenu = () => {
 
    const [menulist,setMenulist] = useState([]);
    const [itemCards,setItemCards] = useState([]);
  useEffect(() => {
    menuData();
  },[]);

  const menuData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.82357895711519&lng=75.29264766722918&restaurantId=93773&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

    setMenulist(json.data.cards[0].card.card.info);
    setItemCards(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
}    
  

  return (
    <div>
      <h3>{menulist.name}</h3>
      <h4>{menulist.cuisines}</h4>
      <h4>{menulist.costForTwoMessage}</h4>
      <h2>Menu</h2>
      {
    itemCards.map(item=><li>{item.card.info.name} -{"Res"}  {item.card.info.price/100}</li>)
      }
    </div>
  );
};

export default RestroMenu;