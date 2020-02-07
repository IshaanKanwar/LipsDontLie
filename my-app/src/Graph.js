import React,{Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Graph extends Component{
    constructor(props){
        super(props);
        this.state={
          chartData:{
            labels:['A','B','C','D','E','F','G'],
            datasets:[{
              label:'Probability',
              data:[
                0.11,
                0.23,
                0.42,
                0.04,
                0.09,
                0.01,
                0.1
              ],
              backgroundColor:[
                'rgba(255,99,132,0.6)',
                'rgba(54,162,235,0.6)',
                'rgba(255,206,86,0.6)',
                'rgba(75,192,192,0.6)',
                'rgba(153,102,255,0.6)',
                'rgba(255,159,64,0.6)',
                'rgba(255,99,132,0.6)',
                'rgba(252,142,255,0.6)'
              ]
            }]
          }
        }
    }
    render(){
        return (
          <div className="App">
            <div className="chart">
              <Bar
              data={this.state.chartData}
              options={{
                // maintainAspectRatio: false
              }}
              />
            </div>
          </div>
        );
    }
}