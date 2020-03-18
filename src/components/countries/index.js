import React, { Component } from 'react';
import './style.css';

import Display from './display/index';
import Search from './search-result-display/index';

export default class QuickFacts extends Component {
    state = {
        allCountries: [],
        search: "",
        searchedCountry: ""
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
            this.setState({
                allCountries: countriesWithMoreThen0Cases
            })

        })
        .then(() =>{
            
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

    componentDidMount(){
        this.getAllData();
    }
    render() {
        // console.log(this.state.searchedCountry, '<---- searchedCountry')
        return (
            <div className="allCountries-container">
                <div  className="searchCountry-input-div">
                    <input type="text" value={this.state.search} onChange={this.searchCountry} placeholder="earch Country"/>
                </div>
                {
                    (this.state.searchedCountry === "") ? <div className="displayCountries-div"><Display data={this.state.allCountries}/> </div>: <div className="display-search-country-div" ><Search data={this.state.searchedCountry}/></div>
                }
            </div>
        )
    }
}
