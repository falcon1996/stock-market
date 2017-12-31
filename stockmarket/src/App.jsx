import React from 'react';
import ReactDOM from 'react-dom';
import Figures from './Data.jsx';
import "isomorphic-fetch";

class Stock extends React.Component {
                
    constructor(props){
        super(props);
        this.state = {
            stock : '',
            allStock : [],
            result : []
        }
    }
                
    stockAdd = (event) => {
        this.setState({
            stock : event.target.value    
        });
    }
                
    submit = (event) => {
        event.preventDefault()
        var element = this.state.stock
        this.setState({
            allStock : this.state.allStock.concat(element)
        });
    }
    
    
    getdata = () => {
        
        fetch('/myapi',{
            method: 'POST',
            body: JSON.stringify({
                myquery: this.state.stock
            }),
            headers: {"Content-Type": "application/json"}
        })
            .then( (response) => {return response.json(); })
            .then( (data) => {
                
                //Data is being collected for highest price point in month.
                var output = []
                for(var i=0; i<12; i++){
                    console.log(data[i].high);
                    output.push(data[i].high)
                }
                
        		this.setState({
        		    
                    result : this.state.result.concat([output])
                });
        		
             })
    }
    
    tell = () => {
        console.log(process.env.NODE_ENV);
        console.log(this.state.result);
    }
     
                
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input onChange = {this.stockAdd} value = {this.state.stock} />
                    <button onClick={this.getdata} type = 'submit'>Submit! </button>
                </form>
                
                <p> New Added: {this.state.stock} </p>
                <p> All : {this.state.allStock} </p>
                <Figures input={this.state.stock}/>
                <p> Express: {this.state.result[0]} </p>
            </div>
        );
    }
}

export default Stock;