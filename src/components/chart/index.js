import React, { Component } from 'react';
import './style.css';
import Chart from 'chart.js';

export default class QuickFacts extends Component {
    state = {
        allCovid: []
    }

    getAllData = async() =>{
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/all');
        fetchData.json()
        .then((data) =>{
            this.setState({
                allCovid: data
            })
        })
        .then(() =>{

            const data = this.state.allCovid;
            var ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [
                        'Total Cases',
                        'Deaths',
                        'Recovered'
                    ],
                    datasets: [
                        {
                            label: 'Points',
                             backgroundColor: ['red', 'orange', 'blue'],
                            // borderWidth: 10,
                            // borderColor: "black",
                            data: [data.cases, data.deaths, data.recovered],
                        }
                    ],
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                },
                Styling: {
                    width: 2
                },
                options: {
                    title: {
                        display: true,
                        text: 'Global Data',
                        fontSize: 30
                    },
                    layout: {
                        // width: 10,
                        // height: 10,
                        // fontSize: 100,
                        padding: {
                            // right: 400, 
                            // left: 400, 
                        }
                    }
                }
            });           
        })
        .catch((err) =>{
            console.log(err.message, '<--- error with fetching api')
        })
    }

    componentDidMount(){
        this.getAllData()
    }
    render() {
        return (
            <div className="myChart-container">
                <canvas id="myChart" style={{width: "100px", height:"50px"}}></canvas>
            </div>
        )
    }
}
