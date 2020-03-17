import React, { Component } from 'react';
import Display from './display/index';

export default class QuickFacts extends Component {
    state = {
        allCountries: []
    }

    getAllData = async() =>{
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
        const dataJson = fetchData.json()
        dataJson
        .then((data) =>{

            var countriesWithMoreThen0Cases = data.filter(data => data.cases > 0)
            this.setState({
                allCountries: countriesWithMoreThen0Cases
            })
            // console.log(countriesWithMoreThen0Cases, '<---- countriesWithMoreThen0Cases')
            // console.log(this.state.allCountries, '<---- this.state')

        })
        .catch((err) =>{
            console.log(err, '<--- error with fetching api')
        })
    }

    getAllData = async() =>{
        const fetchData = await fetch('https://coronavirus-19-api.herokuapp.com/countries');
        await fetchData.json()
        .then((data) =>{

            var countriesWithMoreThen0Cases = data.filter(data => data.cases > 0)

            this.setState({
                allCountries: countriesWithMoreThen0Cases
            })
            // console.log(data, '<---- data')
            // console.log(this.state.allCountries, '<---- this.state')

        })
        .catch((err) =>{
            console.log(err, '<--- error with fetching api')
        })
    }

    componentDidMount(){
        this.getAllData();
    }
    render() {
        return (
            <div>
                {
                    (this.state.allCountries !== "") ? <Display data={this.state.allCountries}/> : <h1>Nothing</h1>
                }
            </div>
        )
    }
}
