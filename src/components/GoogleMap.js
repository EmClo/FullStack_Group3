import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GooglePlaces from "./GooglePlaces";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { API } from "../utils/APIS";
import logo from "./navbar/images/logo.png";

export function MapContainer(props) {
  useEffect(() => {
    API.get(latLng.lat, latLng.lng, 2022).then((response) => {
      console.log(response);
    });
  });
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState({});
  const updateAddress = (data) => {
    setAddress(data);
  };
  const handleSelect = (data) => {
    geocodeByAddress(data)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setLatLng(latLng);
        console.log("Success", latLng);
      })
      .catch((error) => console.error("Error", error));
  };
  return (
    <div class='mapbackground'>
      <div>
        <img class='homeimage' src= {logo} alt="Be Aware Everywhere logo" width={800} height={500}/>
      </div>
    <div class='placessearchbar'>
      <h2>Please enter your location to view the crime in your area below</h2>
      <GooglePlaces
        address={address}
        onChange={updateAddress}
        onSelect={handleSelect}
      />
      </div >
      <div class='crimemap'>
      <Map
        google={props.google}
        style={{ width: "50vw", height: "50vh" }}
        initialCenter={{
          lat: 51.5072,
          lng: 0.1276,
        }}
        center={latLng}
        zoom={16}
      >
        {/* write mapping function for response from get request to render markers */}
      </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer);
