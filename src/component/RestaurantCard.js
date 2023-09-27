import { CLOUDANARY_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
    return (
      <div className="m-8 p-4 w-[250px] h-[420px] rounded-lg overflow-hidden bg-gray-200 hover:bg-gray-300">
        <img
           className="rounded-lg w-full h-48 object-cover"
          alt="res-logo"
          src={CLOUDANARY_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>🍽{cuisines.join(", ")}</h4>
        <h4>👨‍👧{costForTwo}</h4>
        <h4>⭐{avgRating}</h4>
      </div>
    );
  };

  export const withPromtedLable =(RestaurantCard)=>
  {
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;