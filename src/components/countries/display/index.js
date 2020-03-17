import React from 'react';
import './style.css';

const Display = (props) => {
    const showAllCountries = props.data.map((country) => {
        // console.log(country, '<--- country')
        return(
            <div className="allcountries-inner-div" key={country.country} >
                <p >{country.country}</p>
                <p >Confirmed Cases: {country.cases}</p>
                <p >Today Cases: {country.todayCases}</p>
                <p >Deaths: {country.deaths}</p>
                <p >Today Deaths: {country.todayDeaths}</p>
                <p >Recovered: {country.recovered}</p>
                <p >Active: {country.active}</p>
                <p >Critical: {country.critical}</p>
            </div>
        )
    });
    return (
        <div className="allcountries-container">
            {/* <h1>Global</h1> */}
            {showAllCountries}
        </div>
    )
}
export default Display;