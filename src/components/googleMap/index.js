import React, { Component } from 'react';
import './style.css';
import DisplayGoogleMap from './display';
// import CSVToJSON from 'csvtojson';
import FileSystem from 'fs';

export default class CovidMap extends Component{

    state = {
        allCountries: [],
        countriesNames: [],
        countriesGeoLocation: [],
        countryData: [],
        testData: [],
        isOpen: false
    }
    getAllData = async() =>{
        // const fetchData = await fetch('https://pomber.github.io/covid19/timeseries.json');
        // const fetchData = await fetch('https://corona.lmao.ninja/countries');

        var tempData = [];
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
        const dataJson = fetchData.json()
        dataJson
        .then(async(data) =>{
            var countriesWithMoreThen0Cases = await data.filter(data => data.cases > 10000)
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

    csvToJson = () =>{
        const Papa = require("papaparse");
        const dataFilePath = require("./test/today.csv");
        Papa.parse(dataFilePath, {
            download: true,
            header: true,
            //transformHeader: undefined,
            delimiter: ",",
            newline: ",",
            //escapeChar: '"',
            complete: this.updateData
        })
        
    }

    updateData = (result) =>{
        const resultData = result.data;

        const tempData = []
        resultData.map((data) => {
            // console.log(data, '<--- data')
            tempData.push(
                {
                    lat: parseFloat(data.Lat), 
                    lng: parseFloat(data.Long_),
                    FIPS: data.FIPS,
                    admin2: data.Admin2,
                    province_State: data.Province_State,
                    country_Region: data.Country_Region,
                    last_Update: data.Last_Update,
                    confirmed: data.Confirmed,
                    deaths: data.Deaths,
                    recovered: data.Recovered,
                    active: data.Active,
                    Combined_Key: data.Combined_Key,
                }
            )
        })
        this.setState({
            testData: tempData
        })
    }

    // handleClick = (e) =>{
    //     console.log(this.props.history, '<---- e.target')
    // }

    handleToggleOpen = () => {
        console.log("open")
        this.setState({
            isOpen: true
        });
    }
    
    handleToggleClose = () => {
        console.log("close")
        this.setState({
            isOpen: false
        });
    }

    componentDidMount(){
        this.getAllData();
        this.csvToJson();
    }

    render(){
        return(
            <div style={{width: '100vw', height: '50vh'}}>
                <DisplayGoogleMap countryData={this.state.testData} handleToggleOpen={this.handleToggleOpen} handleToggleClose={this.handleToggleClose} isOpen={this.state.isOpen}/>
            </div>
        )
    }
}