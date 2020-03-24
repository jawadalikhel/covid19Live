import React, { Component } from 'react';
import './style.css';
import QuickFacts from '../quickFacts/index';
import AllCountries from '../countries/index';
import GoogleMap from '../googleMap/index';
import Chart from '../charts/index';

export default class Home extends Component {
    render() {
        return (
            <div className="homePage-container">
                
                <div className="quickFact-div">
                    <QuickFacts />
                </div>
                <div className="allCountries-div">
                    <AllCountries />
                </div>


                <div className="GoogleMap-div">
                    <GoogleMap/>
                </div>
{/* 
                <div className="chart-div">
                    <Chart />
                </div> */}
            </div>
        )
    }
}
