import React, { Component } from 'react';

const google = window.google;

class GoogleMap extends Component {
  constructor() {
    super();
    this.updateMap = this.updateMap.bind(this);
  }

  // init the map on city search
  componentDidMount() {
    this.updateMap();
  }

  // update the map position on new city search
  // on condition that lat and lon are not equal
  // to the last city searched
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateMap();
    }
  }

  updateMap() {
    return (
      new google.maps.Map(this.GoogleMapNode, {
        zoom: 12,
        center: {
          lat: this.props.lat, lng: this.props.lon
        }
      })
    );
  }

  render() {
    return <div ref={(n) => { this.GoogleMapNode = n; }} />;
  }
}

export default GoogleMap;
