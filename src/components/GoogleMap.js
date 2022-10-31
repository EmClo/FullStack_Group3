import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GooglePlaces from "./GooglePlaces";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { API } from "../utils/APIS";

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
    <div className="homepage">
      <div className="mapbackground">
        <div className="placessearchbar">
          <h2>
            Please enter your location to view the crime in your area below
          </h2>
          <GooglePlaces
            address={address}
            onChange={updateAddress}
            onSelect={handleSelect}
          />
        </div>
        <div class="crimemap">
          <Map
            google={props.google}
            style={{
              width: "95%",
              height: "90%",
              borderRadius: "20px",
              boxShadow: "10px 20px 30px #510300",
            }}
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
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer);