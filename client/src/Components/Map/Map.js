import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "../MapMarker/MapMarker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  state = {
    center: {
      lat: parseFloat(localStorage.getItem("lat"), 10),
      lng: parseFloat(localStorage.getItem("lng"), 10)
    },
    zoom: 19
  };

  render() {
    console.log(this.state);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "45vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBKdsVgd6BTixezNIdvuRB84M7SA4tC9Bg" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MapMarker
            lat={this.state.lat}
            lng={this.state.lng}
            text="Your Home"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
