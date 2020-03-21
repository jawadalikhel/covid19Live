import React, { Component } from 'react';
import './style.css';
import {GoogleMap,Marker, withScriptjs, withGoogleMap} from 'react-google-maps';



function Map(data){
    // console.log(data.countryData, '<---- countryData');
    // console.log(data.lngData, '<---- lng data')

    return(
        <GoogleMap 
            defaultZoom={2} 
            defaultCenter={{lat: 25, lng: 5}}
        >
            {/* <Marker 
                position={{lat: 41.87194, lng: 12.56738}}
            /> */}
            {
                // console.log(data.countryData.hasOwnProperty("lat"), '<----- data.countryData')
                // data.countryData.forEach((x) =>{
                //     console.log(x, '<--- xxxxxx')
                //     // data.lngData.
                //     // return(
                //     //     <Marker 
                //     //         position={{lat: x.lat, lng: x.lng}}
                //     //     />
                //     // )
                // })
            }
        </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

const ShowGoogleMap = (props) => {
        // console.log(props.latData, ' <--- props');
        return (
            <div className="googleMap-container"> 
                {/* <h1>Google Map Here</h1> */}
                {/* {geoLocation()} */}
                <WrappedMap 
                    countryData={props.countriesGeoLocationData}

                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>
        )
}
export default ShowGoogleMap;



// AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY 

// 824fde72c6044b7aa9b8f960574660da 

// function loopData(data){
//     if(data !== ""){
//         console.log(data, '<--- data')

//         data.map(country => {
//             <Marker 
//                 key={country.place_id}
//                 position={{
//                     lat: country.geometry.lat, 
//                     lng: country.geometry.lng
//                 }}
//             />
//         })
//     }else {
//         console.log('emptyyy')
//     }
// }

// const ShowGoogleMap = (props) => {

//         function Map(){
//             var locProps = props.GeoLocationData;
//             console.log(locProps, '<--- locProps')

//             return (
//                 <GoogleMap 
//                     defaultZoom={3} 
//                     defaultCenter={{lat: 25, lng: 5}}
//                 >
//                     {
//                         props.GeoLocationData.map(country => {
//                             // <Marker />
//                             console.log(country, '<--- country')

//                         })
//                         // console.log(props.GeoLocationData, '<--- GeoLocationData')
//                         // props.GeoLocationData.map((country) =>{
//                         //     console.log(country, '<--- country')
//                         // })

//                     }
//                 </GoogleMap>
//             )
//         }

//         const WrappedMap = withScriptjs(withGoogleMap(Map));
//         return (
//             <div className="googleMap-container"> 
//                 {/* <h1>Google Map Here</h1> */}
//                 {/* {geoLocation()} */}
//                 <WrappedMap 
//                     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAb5NvjzLjElyJY4f5gD-DGc3blNo-qcnY`}
//                     loadingElement={<div style={{ height: `100%` }} />}
//                     containerElement={<div style={{ height: `100%` }} />}
//                     mapElement={<div style={{ height: `100%` }} />}
//                     />
//             </div>
//         )
// }
// export default ShowGoogleMap;
