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
            result : ''
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
    
    
    componentDidMount(){
        
        fetch('/myapi')
            .then(function(response) { return response.json(); })
            .then(function(data) {
                console.log(data.insert);
             })
             
       
    }
    
    tell = () => {
        console.log(process.env.NODE_ENV);
    }
     
                
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input onChange = {this.stockAdd} value = {this.state.stock} />
                    <button onClick={this.tell} type = 'submit'>Submit! </button>
                </form>
                
                <p> New Added: {this.state.stock} </p>
                <p> All : {this.state.allStock} </p>
                <Figures input={this.state.stock}/>
                <p> Express: {this.state.result.insert} </p>
            </div>
        );
    }
}

export default Stock;