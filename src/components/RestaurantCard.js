import { CDN_URL } from "../utils/constants";
import React from "react";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const{name,cuisines,avgRating,costForTwo}=resData?.card.card.info
    const{deliveryTime}=resData?.card.card.info.sla
    return(
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        }}>
           <img className="res-logo" src={CDN_URL+resData.card.card.info.cloudinaryImageId} 
           alt="Delicious Biryani"/>
           <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    )

}
export default RestaurantCard;