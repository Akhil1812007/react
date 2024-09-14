import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>

        </div>
    )
}

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726185600&semt=ais_hybrid"
            alt="Logo"
          />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">Home</li>
            <li className="header__nav-item">About</li>
            <li className="header__nav-item">Offers</li>
            <li className="header__nav-item">Cart</li>
          </ul>
        </nav>
      </header>
    );
  };
  

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

