import ItemList from "./ItemList";


const RestaurantCategory =({data,showItem,setShowIndex})=>{

    const handleclick = () => {
        console.log("showItem:", showItem);
        setShowIndex(); // Check if this function is called
      }
    
    return(
        <div>
            {/* {Header} */}
            <div className="w-6/12 mx-auto my-4 bg bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between  cursor-pointer" onClick={handleclick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                {showItem && <ItemList  items={data.itemCards}/>}     
            </div>
            {/* {Accordian body} */}
        </div>
    )
}

export default RestaurantCategory;