import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import React from "react";
import { useEffect, useState } from "react";

const Body=()=>{
    const [searchText,setSearchText]=useState("");
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]= useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
          const json=await data.json();
      
        console.log(json);
        //Optional Chaning
        setListOfRestaurant(json?.data?.cards.slice(3));
        setFilteredRestaurant(json?.data?.cards.slice(3));
    } 
    console.log("Body Component");
    const listOfRestaurantJS=[
        {
            data:{
                "name":"Dominos",
                "id": "30532",
                "name": "Hotel Empire",
                "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
                "locality": "Infantry Road\t",
                "areaName": "Infantry Road",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Kebabs",
                  "Biryani"
                ],
                "avgRating": 2,
            },
            data:{
                "name":"Pizza Hut",
                "id": "30532",
                "name": "Hotel Empire",
                "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
                "locality": "Infantry Road\t",
                "areaName": "Infantry Road",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Kebabs",
                  "Biryani"
                ],
                "avgRating": 4.1,
            },
            data:{
                "name":"Curly",
                "id": "30532",
                "name": "Hotel Empire",
                "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
                "locality": "Infantry Road\t",
                "areaName": "Infantry Road",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Kebabs",
                  "Biryani"
                ],
                "avgRating": 3,
            },
            data:{
                "name":"Hariom",
                "id": "30532",
                "name": "Hotel Empire",
                "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
                "locality": "Infantry Road\t",
                "areaName": "Infantry Road",
                "costForTwo": "₹450 for two",
                "cuisines": [
                  "Kebabs",
                  "Biryani"
                ],
                "avgRating": 4.4,
            },
       


    }];
    //conditional rendering
   const postData=async ()=>{
    const newRestaurant={
        name:"Harsh Da Dhaba",
        cuisins:["dal","Chawal"],
        avgRating:"4.5 stars",


    }
    const response =await fetch("url",{
        method:'POST',
        header:{
            "content-type":"application-type",
        },
        body:JSON.stringify(newRestaurant),
    })
 const result=await response.json();
    
   }
    return listOfRestaurant.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredData=listOfRestaurant.filter((res)=> res.card.card.info.avgRating > 4);
                    setFilteredRestaurant(filteredData);
                }}
                   >Top Rated Restaurants</button> 
            </div>  
            <div className="search">
            <input type="text" className="search-bar" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button  onClick={()=>{
                //filter the restaurant and update the Ui
              const filteredRestaurant= listOfRestaurant.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filteredRestaurant);
            }}>Search</button>  
            <button onClick={()=>{postData}}></button>  
            </div>
            
            <div className="res-container">
                {
                   filteredRestaurant.map((restaurant)=>( 
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))
                }
            </div>
        </div>
    )
}
export default Body;