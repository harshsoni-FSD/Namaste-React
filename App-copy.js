import React from "react";
import ReactDOM from 'react-dom/client';
/*
if I want nested element
<div id="Parent">
    <div id="child">
        <h1>Hi this it</h1>
        if we want to add silings we use array for children
        <h1> Hi this siblings<h1>
    </div>

    //another whole sibling
     <div id="child">
        <h1>Hi this it</h1>
        if we want to add silings we use array for children
        <h1> Hi this siblings<h1>
    </div>
</div>

*/ 
// /* ReactElement(Object) => HTML(Browser Understand) */ object become html that browser understand
const Parent=React.createElement("div",{id:"Parent"}, //Parent is object and it is a react element
    [ React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]), React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")])]
    // React.createElement("div",{id:"child"},[
    //     React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")])
)

const heading=React.createElement("h1",
    {id:"heading"},//atribute
    "hello from react" )//this is children groes inside in h1 tag)
//{} this empty object is nothing if we want to give attitute to our tag so we use this like id 
//    now we need to put heading as children into the root 
//    we need to tell react what is the root where we render our stuf or where it do dom manupulation
//creating an element is the core thing of react that is why it comes from react
//but creating a root and rendering some thing inside it its is job or reactdom
const root= ReactDOM.createRoot(document.getElementById("root"));
// we have created a root for our react library
root.render(Parent);//Parent is react element  putting parent inside this root tag
console.log(heading)// its is a object
//the job of root.render is to take this object and creat h1 tag that browser understand and put that in inside root
//React.crateElement is just an object

// if suppose something is already inside h1 tag like <h1>Akshsy is here</h1> and we are putting parent in root
// answer is akshey is replace by this parent or whatever we pass inside this render method 
/*if i put h1 above and below root that is working fine because react is only working inside dive id root only 
that is we said react as a library react can works at a place where we apply root as. like it work olny for footer ,header
it will work in a small portion of your app
we can use react in small page of our app unlink framework 
we just need to import that crossorigin links 

*/
