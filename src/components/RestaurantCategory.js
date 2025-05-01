import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    const handleClick =()=>{

       setShowIndex();//as soon as I clicked on it it set the showIndex from parent to that index
       //it call the setShowIndex from parent
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" 
            onClick={handleClick}
            >
            <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                
            </div>
           {showItems && <ItemList items={data.itemCards}/>} 
            </div>
            {/** Header */}
           
            {/** Accordian body */}

        </div>
    )
}
export default RestaurantCategory;