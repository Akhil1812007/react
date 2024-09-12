import React from "react";
import  ReactDOM  from "react-dom/client";

const TitleComponent=function() {
    return (
    <h1 id="title" className="title">Hello man this is title</h1>
    );
 };
const num=1000;
const HeaderComponent=()=>(
    <div id="container">
        <TitleComponent/>
        <h1 className="heading">
            Hello from heading {num}
        </h1>
    </div>
);
console.log(HeaderComponent());
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);