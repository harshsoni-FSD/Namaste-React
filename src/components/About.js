import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
       // console.log("Parent constructor");
    }
    componentDidMount(){
        //console.log("Parent componenet did mount");
    }
    render(){
        //console.log("Parent render");
        return (
            <div>
            <div>
               LoggedInUser
                <UserContext.Consumer>{({loggedInUser})=><h1 className="text-2xl">{loggedInUser}</h1>}</UserContext.Consumer>
            </div>
                 <div>
               <UserClass name={"Aksay soni (Class)"} location={"jaipur"}/>
            </div>
           
            </div>
           
            )
    }
}

export default About;