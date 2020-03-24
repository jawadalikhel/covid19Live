import React from 'react';
// import './style.css';
import {GoogleMap,Marker, withScriptjs, withGoogleMap} from 'react-google-maps';

function Map(data){
    return(
        <GoogleMap 
            defaultZoom={3}
            defaultCenter={{lat: 25, lng: 5}}

        >
             {
                data.data.map((country, index) => {
                return (
                    <Marker
                        key={country.place_id}
                                position={{
                                    lat: country.geoLocation.lat, 
                                    lng: country.geoLocation.lng
                                }}
                    />
                );
                }) 
            }
        </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

const Display = (props) => {
    return (
        <div style={{width: '100vw', height: '70vh'}}>
        <WrappedMap 
            data={props.countryData}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
    )
}
export default Display;