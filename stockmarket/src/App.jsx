import React from 'react';
import ReactDOM from 'react-dom';
import Figures from './Data.jsx';

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
     
    componentDidMount(){
        /*
        fetch('/')
            .then((response) => response.json())
            .then((posts) => this.setState({
                posts: posts,
             }));
        */
        
        this.UserList();
    }
     
    /* 
    UserList = () => {
        $.getJSON('https://randomuser.me/api/').then(({ results }) => this.setState({ result: results }));
    }
    */
                
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input onChange = {this.stockAdd} value = {this.state.stock} />
                    <button type = 'submit'>Submit! </button>
                </form>
                
                <p> New Added: {this.state.stock} </p>
                <p> All : {this.state.allStock} </p>
                <Figures input={this.state.stock}/>
            </div>
        );
    }
}

export default Stock;