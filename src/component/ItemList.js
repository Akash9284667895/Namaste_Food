import {  ITEM_URL } from "../utils/constants";

const ItemList =({items})=>{
    console.log("item Data is",items);
    return(
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id}>
                <div className="p-2 m-2 border-gray-200 border-b-2">
                    <div className="py-2">
                    <img scr ={ITEM_URL + item.card.info.imageId}/>
                    <span>{item.card.info.name}{"-   ₹ "}</span>
                    <span>{item.card.info.price /100}</span>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    
                    
                </div>
                
            </div>
        ))}
    </div>
    )
}

export default ItemList;