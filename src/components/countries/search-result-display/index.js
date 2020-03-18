import React from 'react';

const Search = (props) => {
    // console.log(props.data.country, '<----- props')
    var countryData = props.data;
    return (
           <div  className="allcountries-container" > 
               <div className="allcountries-inner-div">
                    <p>{countryData.country}</p>
                    <p >Confirmed Cases: {countryData.cases}</p>
                    <p >Today Cases: {countryData.todayCases}</p>
                    <p >Deaths: {countryData.deaths}</p>
                    <p >Today Deaths: {countryData.todayDeaths}</p>
                    <p >Recovered: {countryData.recovered}</p>
                    <p >Active: {countryData.active}</p>
                    <p >Critical: {countryData.critical}</p>
                </div>
           </div>
    )
}
export default Search;