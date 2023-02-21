import React from "react";

function Shapes1(props){
    var base = 10;
    var height = 12;
    var area = 1/2*(base*height);
    return (
        <>
        <h1>{area}</h1>
        </>
    );
}

export default Shapes1;