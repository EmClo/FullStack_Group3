import React, { Component, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GooglePlaces from "./GooglePlaces";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export function MapContainer(props) {
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
    <div>
      <GooglePlaces
        address={address}
        onChange={updateAddress}
        onSelect={handleSelect}
      />
      <Map
        google={props.google}
        style={{ width: "50vw", height: "50vh" }}
        initialCenter={{
          lat: 51.5072,
          lng: 0.1276,
        }}
        center={latLng}
        zoom={16}
      ></Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer);
