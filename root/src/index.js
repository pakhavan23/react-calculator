import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: "0",
            memory: "",
            lastOperation: ""
        }
    }
    componentDidUpdate(){
        if(this.state.input.length > 17){
            this.setState({
                input: this.state.input.slice(0,16)
            })
        }
    }
    showInput(i){
        if(this.state.input === "0"){
            this.setState({
                input: i.toString()
            })
        }
        else if(this.state.input.length < 16){
        this.setState({
            input: this.state.input.concat(i)
        })
    }
    };
    clearInput(){
        if(this.state.input.length === 1){
            this.setState({
                input: "0"
            })
        }
        else if(this.state.input === "Can't be divided"){
            this.setState({
                input: "0"
            })
        }
        else{
            this.setState({
            input: this.state.input.slice(0 , this.state.input.length -1)
        })
    }};
    clearAll(){
        this.setState({
            input: "0"
        })
    };
    setPoint(){
        if(this.state.input.includes(".")){
            return null;
        }
        else if(this.state.input.length < 16){
            this.setState({
                input: this.state.input.concat(".")
            })
        }
    }
    calculate(i){
        if(this.state.input === "Can't be divided"){
            return null;
        }
        if(i === "minus"){
            this.setState({
                lastOperation: "minus",
                memory: this.state.input.toString(),
                input: "0"
            })
        }
        if(i === "plus"){
            this.setState({
                lastOperation: "plus",
                memory: this.state.input.toString(),
                input: "0"
            })
        }
        if(i === "multiply"){
            this.setState({
                lastOperation: "multiply",
                memory: this.state.input.toString(),
                input: "0"
            })
        }
        if(i === "divide"){
            this.setState({
                lastOperation: "divide",
                memory: this.state.input.toString(),
                input: "0"
            })
        }
        if(i === "root"){
            this.setState({
                lastOperation: "root",
                input : (Math.sqrt(Number(this.state.input))).toString()
            })
        }
        if(i === "percentage"){
            this.setState({
                lastOperation: "percentage",
                input: (Number(this.state.input/100)).toString()
            })
        }
        if(i === "power"){
            this.setState({
                lastOperation: "power",
                memory: this.state.input.toString(),
                input: "0"
            })
        }
        if(i === "divbyone"){
            if(this.state.input === "0"){
                this.setState({
                    input: "Can't be divided"
                })
            }
            else{
                this.setState({
                lastOperation: "divbyone",
                input: (Number(1/this.state.input)).toString()
                })
            }
        }
        if(i === "plusmn"){
            this.setState({
                lastOperation: "plusmn",
                input: (0-Number(this.state.input)).toString()
            })
        }
    };
    getResult(){
        if(this.state.input === "Can't be divided"){
            return null;
        }
        if(this.state.lastOperation === "minus"){
            this.setState({
                input: (Number(this.state.memory) - Number(this.state.input)).toString()
            })
        }
        if(this.state.lastOperation === "plus"){
            this.setState({
                input: (Number(this.state.memory) + Number(this.state.input)).toString()
            })
        }
        if(this.state.lastOperation === "multiply"){
            this.setState({
                input: (Number(this.state.memory) * Number(this.state.input)).toString()
            })
        }
        if(this.state.lastOperation === "divide"){
            this.setState({
                input: (Number(this.state.memory) / Number(this.state.input)).toString()
            })
        }
        if(this.state.lastOperation === "power"){
            this.setState({
                input: (Math.pow(Number(this.state.memory) , Number(this.state.input))).toString()
            })
        }
    }
    render(){
        return(
            <div id="main">
                <div id="screen">
                    {this.state.input}
                </div>
                <div id="numbers">
                    <div className="row">
                        <span className="btn" onClick={() => this.calculate("percentage")}>%</span>
                        <span className="btn" onClick={() => this.calculate("root")}>√</span>
                        <span className="btn" onClick={() => this.calculate("power")}><b>x<sup>n</sup></b></span>
                        <span className="btn" onClick={() => this.calculate("divbyone")}>1/x</span>
                    </div>
                    <div className="row">
                        <span className="btn" onClick={() => this.clearAll()}>CE</span>
                        <span className="btn" onClick={() => this.clearAll()}>C</span>
                        <span className="btn" onClick={() => this.clearInput()}><img src="https://img.icons8.com/windows/32/000000/clear-symbol.png" alt="clear"/></span>
                        <span className="btn" onClick={() => this.calculate("divide")}>÷</span>
                    </div>
                    <div className="row">
                        <span className="btn" onClick={() => this.showInput(7)}>7</span>
                        <span className="btn" onClick={() => this.showInput(8)}>8</span>
                        <span className="btn" onClick={() => this.showInput(9)}>9</span>
                        <span className="btn" onClick={() => this.calculate("multiply")}>x</span>
                    </div>
                    <div className="row">
                        <span className="btn" onClick={() => this.showInput(4)}>4</span>
                        <span className="btn" onClick={() => this.showInput(5)}>5</span>
                        <span className="btn" onClick={() => this.showInput(6)}>6</span>
                        <span className="btn" onClick={() => this.calculate("minus")}>-</span>
                    </div>
                    <div className="row">
                        <span className="btn" onClick={() => this.showInput(1)}>1</span>
                        <span className="btn" onClick={() => this.showInput(2)}>2</span>
                        <span className="btn" onClick={() => this.showInput(3)}>3</span>
                        <span className="btn" onClick={() => this.calculate("plus")} >+</span>
                    </div>
                    <div className="row">
                        <span className="btn" onClick={() => this.calculate("plusmn")}>±</span>
                        <span className="btn" onClick={() => this.showInput(0)}>0</span>
                        <span className="btn" onClick={() => this.setPoint()}>.</span>
                        <span className="btn" onClick={() => this.getResult()}>=</span>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Calculator/> , document.getElementById("root"));