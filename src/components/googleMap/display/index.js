import React,{useState} from 'react';
// import './style.css';
import {GoogleMap,Marker, withScriptjs, withGoogleMap, InfoWindow} from 'react-google-maps';

function Map(data){
    console.log(data.isOpen, '<--- dataa')
    return(
        <GoogleMap 
            defaultZoom={3}
            defaultCenter={{lat: 25, lng: 5}}

        >
             {
                data.data.map((country, index) => {
                    return (
                        <Marker
                            key={index}
                            position={{
                                lat: country.lat, 
                                lng: country.lng
                            }}
                            style={{color: "blue"}}
                        >
                            {/* {
                                !data.isOpen ? 
                                <InfoWindow onCloseClick={() => console.log("hiiiii")}>
                                    <h1>Helloooo</h1>
                                </InfoWindow> : null
                            } */}
                        </Marker>
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
            handleToggleOpen={props.handleToggleOpen}
            isOpen={props.isOpen}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    </div>
    )
}
export default Display;