import React, { Component } from 'react';
import Display from './display/index';

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
        .catch((err) =>{
            console.log(err.message, '<--- error with fetching api')
        })
    }

    componentDidMount(){
        this.getAllData();
    }
    render() {
        return (
            <div>
                <Display data={this.state.allCovid}/>
            </div>
        )
    }
}
