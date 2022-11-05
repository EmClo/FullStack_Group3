import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import crimedata from "../data/crime-glouster.json";
import "./App.css";


export default function App() {


  return (
    <MapContainer center={[51.8642, -2.2444]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />


{crimedata.features.map(crime => (
        <Marker
          key={crime.properties.CrimeID}
          position={[
            crime.geometry.coordinates[1],
            crime.geometry.coordinates[0]
          ]}>
        <Popup position={[
            crime.geometry.coordinates[1],
            crime.geometry.coordinates[0]
          ]}>
            <div>
              <h3>{"Location: " + crime.properties.Location}</h3>
              <p>{"Date: " +  crime.properties.Month}</p>
              <p>{"Crime type: " + crime.properties.Crimetype}</p>
            </div>
          </Popup>

      

        </Marker>
      ))}

    </MapContainer>
  );
}
