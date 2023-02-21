import React from "react";
import { Component } from "react";
const pi = 3.14;
const r = 2;
class Circlec extends React.Component{
    render(){
        return(
            <div>
            <h2>Area of the Circle</h2>
            <h3>Formula:pi*r*r</h3>
            <h4>Radius {r}</h4>
            <p>Ans: {pi*r*r}</p>            
            </div>
        );
    }
}
export default Circlec;