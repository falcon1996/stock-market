import React from 'react';
import ReactDOM from 'react-dom';

class Figures extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
          data : this.props.input
        }
    }  
    
    render() {
        return(
            <p>In Child Component: {this.props.input}</p>  
        );
    }
    
};

export default Figures;