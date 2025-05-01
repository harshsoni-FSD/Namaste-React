import React from "react";
class UserClass extends React.Component
{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
           userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"htp://dummy-photo.com"
           }
        }
        //console.log("child constructor");
    }
   async componentDidMount(){
        console.log("child componenet did mount");
        const data= await fetch("https://api.github.com/users/harshsoni-FSD");
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        
    }
  render(){
    //console.log("child render");
    const {name,location,avatar_url}=this.state.userInfo;
    return <div className="user-card">
        <img src={avatar_url}/>
          <h2>Name:{name}</h2>
          <h2>Location:{location}</h2>
          <h2>Photo:{avatar_url}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>Count Increase</button>
    

</div>
  }  
}
export default UserClass;