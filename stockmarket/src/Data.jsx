import React from 'react';
import ReactDOM from 'react-dom';
import {Line, Bar} from 'react-chartjs-2';



class Figures extends React.Component {
  
    constructor(props) {
        super(props);
        
        
        this.state = {
            chartData : {
                
            	labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"],
            	datasets: [
            		{
            			label: "Highest Stock Prices",
            			data: [],
            			//backgroundColor: ["#4DB6AC", "#E57373", "#7986CB", "#F06292", "#E0E0E0"]
            		}
            	]
            	
            }
        };
    }  
    
    componentWillReceiveProps(nextProps) {
        console.log('Prop Recieved')
        console.log(this.props, nextProps);

        if(nextProps.input != null){
            this.setState({
                chartData : {
                    
                	labels: ["jan", "feb", "mar", "apr", "may", "june","july", "aug", "sep", "oct", "nov", "dec"],
                	datasets: [
                		{
                			label: "High Stock Price",
                			data: this.state.chartData.datasets[0].data.concat(nextProps.input),
                			backgroundColor: ["#9633FF"]
                		}
                	]
                }
            });
        }
    }
    
    render() {
        return(
            <div>
                <Line
                	data={this.state.chartData}
                	
                	
                	options={{
                		maintainAspectRatio: false
                	}}
                />
            </div>
        );
    }
    
};

export default Figures;