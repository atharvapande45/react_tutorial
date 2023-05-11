import React from "react";

function Card({ name, phone }) {
    var styles = {
        border: "solid 5px",
    };

    return (
        <>
            <div className="border">
                <h1>Name : {name}</h1>
                <h1>Phone no.: {phone}</h1>
            </div>
        </>
    );
}

export default Card;
