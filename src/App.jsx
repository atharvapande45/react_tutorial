import React from "react";
import Card from "./Card";
import data from "./card_data.js";

function App() {
    return (
        <>
            {data.map((ele) => {
                return <Card name={ele.names} phone={ele.phoneNo} />;
            })}
        </>
    );
}

export default App;
