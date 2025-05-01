import Parent from "./Parent";
import React from "react";
const Child=(props)=>{
    return (
        <div>
            <h1>This is child </h1>
            <h2>Name:{props.name}</h2>
            <h2>Name:{props.LastName}</h2>
        </div>
    )
}
export default Child;