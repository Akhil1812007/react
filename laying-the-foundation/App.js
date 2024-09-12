import React from "react";
import ReactDOM from "react-dom/client"
const parent=<h1 > Hello by JSx</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);