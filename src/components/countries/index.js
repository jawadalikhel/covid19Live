import React, { Component } from 'react';
import './style.css';

import Display from './display/index';
import Search from './search-result-display/index';
import GoogleMap from '../googleMap/index';

export default class QuickFacts extends Component {
    state = {
        allCountries: [],
        search: "",
        searchedCountry: "",
        countriesNames: [],
        countriesGeoLocation: []
    }



    getAllData = async() =>{
        // const fetchData = await fetch('https://pomber.github.io/covid19/timeseries.json');
        // const fetchData = await fetch('https://corona.lmao.ninja/countries');

        // console.log(data, '<---- dataaa')
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
        const dataJson = fetchData.json()
        dataJson
        .then((data) =>{
            var countriesWithMoreThen0Cases = data.filter(data => data.cases > 0)
            var tempData = [];
            countriesWithMoreThen0Cases.map((country) =>{
                // console.log(country, '<--- country.name')
                tempData.push(country.country)

            })
            this.setState({
                allCountries: countriesWithMoreThen0Cases,
                countriesNames: tempData
            })

        })
        .then(() =>{
            this.geoLocation();
        })
        .catch((err) =>{
            console.log(err, '<--- error with fetching api')
        })
    }


    searchCountry = async(e) => {
        this.setState({
            search: e.target.value.substr(0,20)
        })


        const fetchData = await fetch(`https://corona.lmao.ninja/countries/${e.target.value}`);
        fetchData.json()
        .then((country) =>{
            this.setState({
                searchedCountry: country
            })
        })
    }

    geoLocation = () => {
         const locationProps = this.state.countriesNames;
        //  console.log(this.state.countriesNames, '<--- locationProps');
        var tempData = [];
         locationProps.map((country) =>{

             const fetchLocation = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`)
             // console.log(fetchLocation.rate, '<----- fetchLocation.data')
             fetchLocation
             .then((data) =>{
                 // console.log(data, '<----- data')
                 return data.json();
 
             })
             .then((nData) =>{
                 // locationProps.map((country) =>{
                 //     console.log(country, '<--- country')
                 // })
                 // console.log(nData, '<--- country')
                 nData.results.map((data) =>{
                    //  console.log(data.geometry.location, '<--- lat')
                    //  console.log(data.geometry.location.lng, '<--- lng')

                    //  tempLatData.push(data.geometry.location.lat);
                    //  tempLngData.push(data.geometry.location.lat);

                    //  lngData.push(data.geometry.location.lng);
                     // return data.geometry.location;
                     tempData.push(data.geometry.location);
                    //  return countriesGeoLocation;
                     // if(data.formatted === country){
                     //     console.log(data, '<------ data')
                     //     // return data.geometry;
                     // }
                 })
             })
         })

        this.setState({
            countriesGeoLocation: tempData,
        })

        // console.log(this.state.countriesGeoLocation, '<--- tempData')

     }

    componentDidMount(){
        this.getAllData();
    }
    render() {
        // console.log(this.state.searchedCountry, '<---- searchedCountry')
        return (
            <div className="allCountries-container">
                <div  className="searchCountry-input-div">
                    <input type="text" value={this.state.search} onChange={this.searchCountry} placeholder="Search Country"/>
                </div>
                {
                    (this.state.searchedCountry === "") ? 
                    <div className="displayCountries-div">
                        <Display data={this.state.allCountries}/> 
                    </div>
                    : 
                    <div className="display-search-country-div" >
                        <Search data={this.state.searchedCountry}/>
                    </div>
                }

                {/* <div className="google-map-div">
                    <GoogleMap data={this.state.allCountries} countriesNames={this.state.countriesNames} countriesGeoLocationData={this.state.countriesGeoLocation} />
                </div> */}

                {/* <div className="google-map-div">
                    <GoogleMap />
                </div> */}
            </div>
        )
    }
}
