import React, { Component } from 'react';
import './style.css';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

 function CovidGoogleMap(){
    return (
        <GoogleMap 
            defaultZoom={2} 
            defaultCenter={{lat: 25, lng: 5}}
            // defaultCenter={{lat: 10, lng: 10}}

        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(CovidGoogleMap));

export default class Chart extends Component {
    render() {
        return (
            <div className="googleMap-container"> 
                {/* <h1>Google Map Here</h1> */}
                <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>
        )
    }
}
