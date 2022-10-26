import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';




export class MapContainer extends Component {
  render() {
    console.log(process.env);
    return (
      <Map google={this.props.google} 
      style={{width:'50vw', height:'50'}}
      initialCenter = {{
        lat: 51.5072,
        lng: 0.1276,
      }}
      zoom={16}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

      </Map>

    );
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_KEY
  })(MapContainer)

  