import React, { Component } from 'react';
import './style.css';
import QuickFacts from '../quickFacts/index';
import AllCountries from '../countries/index';
import Chart from '../chart/index';
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

                <div className="google-map-div">
                    <Chart />
                </div>
            </div>
        )
    }
}
