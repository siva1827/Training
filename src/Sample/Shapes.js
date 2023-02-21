import React from "react";
import Shapes1 from "./Shape1";
import Shapes2 from "./Shape2";
import Square from "../Square";
import Triangle from "../Triangle";
import Rhombus from "../Hexagon";
class Shapes extends React.Component{
    render(){
        return(
        <>
        <Shapes1/>
        <br/>
        <Shapes2/>
        <br/>
        <Square/>
        <br/>
        <Triangle/>
        <br/>
        <Rhombus/>

        </>
        )
    }
}

export default Shapes;