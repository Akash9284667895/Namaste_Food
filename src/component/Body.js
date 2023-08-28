import { useState ,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {
  const [resList,setReslist]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData =async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.83641491733662&lng=75.2922973036766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =await data.json();
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setReslist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (resList.length === 0) { // Check if resList is empty
    return <Shimmer />;
  }
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = resList.filter(
              (res) =>res.info.avgRating >4
            );
            setReslist(filteredList)
          }}>Top Rating Restro</button>
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;