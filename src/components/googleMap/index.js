import React, { Component } from 'react';
import './style.css';
import DisplayGoogleMap from './display';

export default class CovidMap extends Component{

    state = {
        allCountries: [],
        countriesNames: [],
        countriesGeoLocation: [],
        countryData: []
    }
    getAllData = async() =>{
        // const fetchData = await fetch('https://pomber.github.io/covid19/timeseries.json');
        // const fetchData = await fetch('https://corona.lmao.ninja/countries');

        var tempData = [];
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
        const dataJson = fetchData.json()
        dataJson
        .then(async(data) =>{
            var countriesWithMoreThen0Cases = await data.filter(data => data.cases > 0)
            countriesWithMoreThen0Cases.map((country) =>{
                tempData.push(country.country)
            })
        })
        .then(async () =>{
            await this.geoLocation(tempData);
        })
        .catch((err) =>{
            console.log(err.message, '<--- error with fetching api')
        })
    }

    geoLocation = async(countriesNames) => {
       const locationProps = countriesNames;
       var tempData = [];

       locationProps.map((country) =>{
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`)
            .then((data) =>{
                return data.json();
            })
            .then((nData) =>{
                nData.results.map((data) =>{
                    tempData.push({country_name: data.formatted_address, place_id: data.place_id, geoLocation: data.geometry.location});
                })
                
                this.setState({
                    countryData: tempData,
                })
            })
        })
    }

    componentDidMount(){
        this.getAllData();
    }

    render(){
        return(
            <div style={{width: '100vw', height: '50vh'}}>
                <DisplayGoogleMap countryData={this.state.countryData}/>
            </div>
        )
    }
}