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
                    //console.log(data[i].high);
                    output.push(data[i].high)
                }
                
        		this.setState({
                    result : this.state.result.concat(output)
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
                
                <p style={{color:"black", fontSize: 30, marginLeft: 20}}> New Added: {this.state.stock} </p>
                <p style={{color:"black", fontSize: 30, marginLeft: 20}}> All : {this.state.allStock} </p>
                {/*<p> Express: {this.state.result} </p> */}
                <Figures input={this.state.result}/>
                
                <br /> <br /> <br />
                <form onSubmit = {this.submit} >
                    <div class="form-group col-xs-5 col-lg-5">
                        <input onChange = {this.stockAdd} value = {this.state.stock} placeholder="Enter stock name" class="form-control"/>
                        <button onClick={this.getdata} type = 'submit' class="btn btn-success">Submit! </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Stock;