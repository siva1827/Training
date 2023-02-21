import React from "react";
import { Component } from "react";
const breadth = 3;
const height = 4
class Trianglec extends React.Component{
    render(){
        return(
            <div>
            <p> {0.5*height*breadth}</p>            
            </div>
        );
    }
}
export default Trianglec;