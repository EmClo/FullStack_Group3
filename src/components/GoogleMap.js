import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import GooglePlaces from "./GooglePlaces";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { API } from "../utils/APIS";

export function MapContainer(props) {
  const [crimesFound, setCrimesFound] = useState([]);
  const [latLng, setLatLng] = useState({
    lat: 51.5072,
    lng: 0.1276,
  });

  const [address, setAddress] = useState("");
  useEffect(() => {
    API.get(latLng.lat, latLng.lng, "2021-12").then((response) => {
      setCrimesFound(response.data);
      console.log(response.data);
    });
    // API.get(latLng.lat, latLng.lng, "2021-11").then((response) => {
    //   const oldCrimesFound = crimesFound;
    //   oldCrimesFound.push(response.data);
    //   setCrimesFound(oldCrimesFound);
    // });
    // API.get(latLng.lat, latLng.lng, "2021-10").then((response) => {
    //   const oldCrimesFound = crimesFound;
    //   oldCrimesFound.push(response.data);
    //   setCrimesFound(oldCrimesFound);
    // });
    console.log(crimesFound);
  }, [latLng.lat, latLng.lng]);
  // INSTANTIATE BY GETTING BROWSER LOCATION - LOOK UP BROWSER GEOLOCATION APIS

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
          <h2 className="search">
            Please enter your location to view the crime in your area below
          </h2>
          <GooglePlaces
            address={address}
            onChange={updateAddress}
            onSelect={handleSelect}
          />
        </div>
        <div className="crimemap">
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
            {/* write mapping function for response from get request to render markers --
            currently returns one marker for the location as places autocomplete only sends one latLng*/}

            {crimesFound.map((crimeData) => {
              return (
                <Marker
                  title={crimeData.category}
                  position={{
                    lat: crimeData.location.latitude,
                    lng: crimeData.location.longitude,
                  }}
                />
              );
            })}
          </Map>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(MapContainer);
