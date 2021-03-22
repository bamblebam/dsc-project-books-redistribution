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


//Add the access token here

mapboxgl.accessToken = "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";

const Map = () => {

  
  const mapContainerRef = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [zoom, setZoom] = useState(5);

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
      center: [19.2, 17.2],
      zoom: zoom,
    });

    //This adds zoom button and compass
    map.addControl(new mapboxgl.NavigationControl({
      showCompass: false,
      showZoom: true
    }), "bottom-left");

    var geocoder = new MapboxGeocoder({
      // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: true, // Do not use the default marker style
      placeholder: 'Search ', // Placeholder text for the search bar
      
      });
    map.addControl(geocoder);
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: false
      }),"top-left"
      );
    map.on("move", () => {
      setLongitude(map.getCenter().longitude);
      setLatitude(map.getCenter().latitude);
      setZoom(map.getZoom().toFixed(2));
    });

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
            <input type="text" placeholder ="Search Address on top right bar" onClick={styles.OnClickStyles}></input>
            </div>
        </div>
        <div className ={styles.MoveToRight}>
          
          <Tippy Tippy placement='bottom' content="Bottom Tooltip"  content="Your location is not stored or shared" >
          <label className={styles.Continue}>Save</label>
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