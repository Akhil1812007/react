import React from "react";
import ReactDOM from "react-dom/client";
import restuarants  from "./swiggy-apt-data"

const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <ResBody/>

        </div>
    )
}

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo-container">
          <img
            className="header__logo"
            src="https://w7.pngwing.com/pngs/882/726/png-transparent-chef-cartoon-chef-photography-cooking-fictional-character-thumbnail.png"
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
  const allRestuarants=restuarants;
const ResBody=()=>{
    //console.log(allRestuarants);

    return (
        <div className="res-body">
            <div className="search">
                search
            </div>
            <div className="res-card-list">
               
            {
                allRestuarants.map(
                    (res)=>{
                        return(<ResCard restuarnt={res}/>);
                    }
                )
            }
           
            </div>
        </div>
    );
}

const ResCard=(probs)=>{
    console.log(probs);
    const {restuarnt}=probs;
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId}=restuarnt.info;
    console.log(name +"name");
    const {res}=probs;
    //console.log(res.name);
    return (
      <div className="res-card">
         <img className="food-image"alt="biriyani" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
         <h3>{name}</h3>
         <h4 className="cuisine">{cuisines?.join(",")}</h4>
         <div className="rate-time">
            <h4>{avgRating}⭐</h4>
            <h4>{sla?.deliveryTime} 🕰️</h4>
            <h4>{costForTwo}</h4>
         </div>
         
         
         
      </div>
        
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

