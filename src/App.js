import React from "react";
import ReactDOM from 'react-dom/client';
import "../index.css";
import Body from "./components/Body";
import Header  from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
const styleCard = {
    backgroundColor: "#f0f0f0",
};


const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
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
        }
    ],
    errorElement:<Error/>,
    },
    

])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);