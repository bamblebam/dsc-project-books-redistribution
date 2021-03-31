import React, { useRef, useEffect, useState,Component } from "react";
import mapboxgl from "mapbox-gl";
import styles from "../../styles/css/Map.module.css";
import 'mapbox-gl/dist/mapbox-gl.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'
var FormData = require('form-data');
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import firebase from "firebase/app"
import "firebase/auth"
import { firebaseApp } from '../../configurations/db';
//Add the access token here

mapboxgl.accessToken = "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";
const Reverseg_geocode = "https://api.tomtom.com/search/2/reverseGeocode/37.553,-122.453.JSON?key=c7nsCFO1nd9rpS8mRxfeJlFZl5FT2Md7";
var longlat={"long":0,"lat":0}
let TextAddress =""
const Map = () => {

  const history = useHistory();
	const auth = useAuth()
	const router = useRouter()

  const [address,setAddress]=useState(0);
  const mapContainerRef = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [zoom, setZoom] = useState(5);
 
function updateLoc() {
  console.log(longlat.long)
  console.log(longlat.lat)
  // data={
  //   location: new firebase1.firestore.GeoPoint(longlat.lat,longlat.long)
  // }
  axios.put("http://localhost:8080/api/user/1kY7ymskNraVdl5SmgYTPtr7Xgq1", longlat).then(res => {
				console.log(res)
        router.push('/');
			})
  
}

  const userid = firebase.auth().currentUser.uid || null
  console.log(userid);

function successPosition(position) {
    //Mapbox receives longitude and latitude from Geolocation API
    setLongitude(position.coords.longitude)
    setLatitude(position.coords.latitude)
  }
  
  //When there is an error in fetching the position the position with these coordinates is mocked.
  function errorPosition() {
    setLongitude(12.9716)
    setLatitude(77.5946)
    
  }

  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // center: [latitude, longitude],
      center: [72.943187,19.188422 ],
      zoom: zoom,
    });
    var marker = new mapboxgl.Marker({draggable: true})
    .setLngLat([ 72.94318719476757,19.188422818024094])
    .addTo(map);
      function onDragEnd() {
    var lngLat = marker.getLngLat();
    map.flyTo({
      center: [lngLat.lng,lngLat.lat]
      });
    // coordinates.style.display = 'block';

    console.log('Longitude: ' + lngLat.lng + 'Latitude: ' + lngLat.lat);
    setMarker(lngLat.lng,lngLat.lat)
    // latlong={"long":lngLat.lng,"lat":lngLat.lat}
    }

    marker.on('dragend', onDragEnd);
    //This adds zoom button and compass
    map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    }), "bottom-left");

    var geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: false, // Do not use the default marker style
      placeholder: 'Search ', // Placeholder text for the search bar
      
      });
    map.addControl(geocoder);
    geocoder.on('result', function(e) {
      console.log(e.result.place_name);
      console.log(e.result.geometry.coordinates)
      setAddress(e.result.place_name);
      console.log(address)
      marker.setLngLat(e.result.geometry.coordinates)
      // map.getSource('single-point').setData(e.result.geometry);
      // marker.setLngLat(e.result.geometry.coordinates)
      map.flyTo({
      center: e.result.geometry.coordinates
      });
      setMarker(... e.result.geometry.coordinates)
    });
    var geolocate=new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: false,
      showUserLocation:false,
      showAccuracyCircle:false
      })
    map.addControl(geolocate,"top-left");
    geolocate.on('geolocate', function(loc) {
      console.log(loc.coords)
      console.log(loc.coords.latitude)
      setMarker(loc.coords.longitude,loc.coords.latitude)
      
      });
    map.on("move", () => {
      setLongitude(map.getCenter().longitude);
      setLatitude(map.getCenter().latitude);
      setZoom(map.getZoom().toFixed(2));
  
    });
    function setMarker(lng,lat){
      longlat={"long":lng,"lat":lat}
      setLatitude(lat)
      setLongitude(lng)
      
      marker.setLngLat([lng,lat])
      map.flyTo({
      center: [lng,lat]
      });

      

    var url="https://api.tomtom.com/search/2/reverseGeocode/+"+lat+","+lng+".JSON?key=c7nsCFO1nd9rpS8mRxfeJlFZl5FT2Md7"

axios.get(url).then(res => {
        setAddress(res.data.addresses[0].address.streetName+","+res.data.addresses[0].address.municipalitySubdivision+","+res.data.addresses[0].address.municipality+","+res.data.addresses[0].address.countrySubdivision)
				console.log(res.data.addresses[0].address.streetName+res.data.addresses[0].address.municipalitySubdivision+res.data.addresses[0].address.municipality+res.data.addresses[0].address.municipality+res.data.addresses[0].address.countrySubdivision)
        // router.push('/');
			})}
      // useEffect(()=>{
      //   setLatitude(lat)
      // },[lat])
      // useEffect(()=>{
      //   setLatitude(lng)
      // },[lng])
    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
  return (
    
    <div className={styles.Location_form}>
      <div className={styles.Incenter}>
        <h3>Enter your Location </h3>
        <Tippy placement='top' arrow={false} content="Click on top left Icon to get current location "><div className={styles.map__container} ref={mapContainerRef} /></Tippy>
        <div className={styles.formInput}>
          <div className ={styles.formChildren}>
            <h4>Address  </h4>
            {address ? (<input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick={styles.OnClickStyles} value={address} ></input>):(<input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick={styles.OnClickStyles} ></input>)}
            {/* <input type="text" placeholder ="Search Address on top right bar" className={"mapboxgl-ctrl-geocoder--input"} onClick={styles.OnClickStyles} content={address} ></input> */}
            </div>
        </div>
        <div className ={styles.MoveToRight}>
          
          <Tippy Tippy placement='bottom' content="Bottom Tooltip"  content="Your location is not stored or shared" >
          {/* <label className={styles.Continue}>Save</label> */}
          <button onClick={updateLoc} className={styles.Continue}>Continue</button>
          </Tippy>
        </div>
      </div>
    </div>
  );
};

export default Map;
/*
import MapGL, {GeolocateControl } from 'react-map-gl'
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import 'mapbox-gl/dist/mapbox-gl.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"

const token= "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";


const geolocateStyle = {
  float: 'right',
  margin: '50px',
  padding: '10px'
};
class Map extends Component {
  state = { 
    viewport :{
      width: "100%",
      height: 900,
      latitude: 0,
      longitude: 0,
      zoom: 1
    },
    searchResultLayer: null
  }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

    render(){
      const { viewport, searchResultLayer} = this.state
      return (
        <div style={{ height: '100vh'}}>
          <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Use the search bar to find a location or click <a href="/">here</a> to find your location</h1>
          <MapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            width="100%"
            height="90%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            >
              <Geocoder 
                mapRef={this.mapRef}
                onResult={this.handleOnResult}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={token}
                position='top-left'
      
              />
              
            </MapGL>
            <DeckGL {...viewport} layers={[searchResultLayer]} />
        </div>
      )
    }
}
export default Map
*/

// function setMarker(lng,lat){
//   // longlat={"long":lng,"lat":lat}

//   marker.setLngLat([lng,lat])
//   map.flyTo({
//   center: [lng,lat]
//   });
//   $.ajax({
//     type: "POST",
//     dataType: 'text',
//     url: "/php",
//     // url: api_url,
//     async: false,
    
//     data: {
//         // url: JSON.stringify(api_url),
//         url:"https://api.tomtom.com/search/2/reverseGeocode/+"+lat+","+lng+".JSON?key=c7nsCFO1nd9rpS8mRxfeJlFZl5FT2Md7"
//     },
//     success: function (result) {
//         console.log(result)
//         // result = result.replaceAll("'", "\"");
        
//         var jsondata = JSON.parse(result);
//         console.log(jsondata)
//         if (jsondata!= undefined) {
//                 // display_rev_geocode_result(jsondata);
//                 adtext=jsondata.addresses[0].address.municipalitySubdivision+","+jsondata.addresses[0].address.municipality+","+jsondata.addresses[0].address.postalCode
//                 console.log(adtext)
//                 document.getElementById('addText').innerHTML=adtext
//                 // document.getElementById('addL').innerHTML=[lng,lat]
//         }
//         /*handle the error codes and put the responses in divs. more error codes can be viewed in the documentation*/
//         else{
//            document.getElementById('addText').innerHTML="No Result found" ;
//         }
//     }
// });
// }