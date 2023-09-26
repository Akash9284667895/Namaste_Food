import { useState, useEffect, useCallback, useContext } from "react";
import RestaurantCard, { withPromtedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/UseOnlineStatus";
import { withPromtedLable } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setReslist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  // const RestroCardPromoted=withPromtedLable(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const handleShowAll = () => {
    setFilteredRestaurants(resList); // Display all restaurants
  };
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.83641491733662&lng=75.2922973036766&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setReslist(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1> Looks Like You're Offine!! Please Check Your Internet Satatus;</h1>
    );
  if (resList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
        <div className="p-4 m-2">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-2 py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterrestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filterrestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rating Restro
          </button>
        </div>
        <div className="p-4 m-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleShowAll}
          >
            All Restaurants
          </button>
        </div>
        <div className="p-4 m-2 flex items-center">
          <label className="p-2">UserName: </label>
          <input
            className="border border-solid border-black rounded-lg px-2 py-1"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
  }; 

export default Body;
