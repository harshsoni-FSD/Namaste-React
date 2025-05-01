import { CDN_URL } from "../utils/constants";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const {resData}=props;
    console.log("ResData",resData);
    const { loggedInUser }=useContext(UserContext);
    const{name,cuisines,avgRating,costForTwo}=resData?.card.card.info
    const{deliveryTime}=resData?.card.card.info.sla
    return(
         <div data-testid="resCard" 
        className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
           <img className="rounded-lg" src={CDN_URL+resData.card.card.info.cloudinaryImageId} 
           alt="Delicious Biryani"/>
           <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{loggedInUser}</h4>
            
        </div>
    )

}
//Higher Order Compenent
//input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel =(RestaurantCard)=>{

    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-4 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
            )
        } 
    }


export default RestaurantCard;