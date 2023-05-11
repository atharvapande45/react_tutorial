import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Login from "./Login";
import App from "./App";
var firstName = "Atharva";
var lastName = "Pande";

// var date = new Date();
// var day = date.getDay();
// var month = date.getMonth();

var getName = () => {
    return firstName + " " + lastName;
};

var loggedIn = false;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
