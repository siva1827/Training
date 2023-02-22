import React from "react";
class Task_1 extends React.Component{
    constructor(props){
        super(props);
        this.state=
            {
            a:"3",
            b:"7",
            c:"8"
        };
    }
    changeValue1=()=>{
        this.setState({a:"9", b:"10" ,c:"2"})
    }
    changeValue2=()=>{
        this.setState({a:"10", b:"6" ,c:"8"})
    }
    changeValue3=()=>{
        this.setState({a:"3", b:"4" ,c:"5"})
    }
    changeValue4=()=>{
        this.setState({a:"2", b:"3" ,c:"8"})
        
    }
    changeValue5=()=>{
        this.setState({a:"5", b:"1" ,c:"8"})
    }

    render(){

        return(
            <>
            <h1>
                {this.state.a*this.state.a+this.state.b*this.state.b+2*this.state.a*this.state.b}
                
            </h1>
            <button onClick={this.changeValue1}>value</button>
            <button onClick={this.changeValue2}>value</button>
            <button onClick={this.changeValue3}>value</button>
            <button onClick={this.changeValue4}>value</button>
            <button onClick={this.changeValue5}>value</button>


            </>
        )
    }
}
export default Task_1;