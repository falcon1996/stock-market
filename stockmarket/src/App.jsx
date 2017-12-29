import React from 'react';
import ReactDOM from 'react-dom';

class Stock extends React.Component {
                
    constructor(props){
        super(props);
        this.state = {
            stock : '',
            allStock : []
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
                
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input onChange = {this.stockAdd} value = {this.state.stock} />
                    <button type = 'submit'>Submit! </button>
                </form>
                <p> New Added: {this.state.stock} </p>
                <p> All : {this.state.allStock} </p>
            </div>
        );
    }
}

export default Stock;