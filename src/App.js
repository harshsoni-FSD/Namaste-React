import React ,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
import "../index.css";
import Body from "./components/Body";
import Header  from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { MENU_API } from "./utils/constants";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const styleCard = {
    backgroundColor: "#f0f0f0",
};

const Grocery= lazy(()=> import("./components/Grocery"))
const About=lazy(()=>import("./components/About"));
const AppLayout=()=>{
    const [userName,setUserName]=useState();
    //Authentication
    useEffect(()=>{
        //make an api cll and send username and password
        const data={
            name:"harsh Soni"
        };
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
             <div className="app">
                {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}></UserContext.Provider> */}
                <Header/>
             <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
   
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/about",
            element:<About/>,
            errorElement:<Error/>
        },
        {
            path:"/contact",
            element:<Contact/>,
            errorElement:<Error/>
        },
        {
            path:"/cart",
            element:<Cart/>,
            errorElement:<Error/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
            errorElement:<Error/>
        },
        {
            path:"/restaurants/:redId",
            element:<RestaurantMenu/>,
            errorElement:<Error/>
        }
    ],
    errorElement:<Error/>,
    },
    

])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);