import React from "react";
import ReactDOM from 'react-dom/client';

//React Element
const heading=(
<h1 id="heading" tabIndex="5">namaste javascript</h1>);
// const HeadingCompoenet2=()=>{
//     return <h1>Namaste JavaScript</h1>
// }
const Title=()=>{
    return <h1 className="head">
        Namaste from title
    </h1>
}
const Title2=( <h1 className="head">
    Namaste from title
</h1>)
    
const data=api.getData();
 const HeadingCompoenet=()=>(
    <div id="container">
        {data}
        <Title/>
        {Title2}
<h1 className="heading">Namaste JavaScript from functional compoenet</h1>
    </div>
 
);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingCompoenet/>);
