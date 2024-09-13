import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>

        </div>
    )
}

const Header =()=>{
    return(
        <di className="Header">
            <div className="logo-container">
                <img className="logo"  src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid"></img>
            </div>

        </di>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

