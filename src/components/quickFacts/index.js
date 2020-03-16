import React, { Component } from 'react'

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
            console.log(err, '<--- error with fetching api')
        })
    }

    componentDidMount(){
        this.getAllData();
    }
    render() {
        console.log(this.state)
        return (
            <div>
                COVID19-Live
            </div>
        )
    }
}
