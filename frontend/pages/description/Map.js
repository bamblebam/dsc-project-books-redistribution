import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "../../styles/css/Map.module.css";

//Add the access token here
mapboxgl.accessToken = "pk.eyJ1IjoiZGlhbW9uZHNzaGluZSIsImEiOiJja21ranZkdW0xMXEwMnZzMTEyM3hhM2YwIn0.JM9YXMef9P7iKu52jt5-KQ";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [zoom, setZoom] = useState(5);


  navigator.geolocation.getCurrentPosition(successPosition, errorPosition, {
    enableHighAccuracy: true,
  });

  //When the position is fetched successfully.
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

  // This gets fired up when the application loads
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [latitude, longitude],
      zoom: zoom,
    });

    //This adds zoom button and compass
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLongitude(map.getCenter().longitude);
      setLatitude(map.getCenter().latitude);
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div>
      <div className="styles.map__container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;