import React, { Component } from 'react';
const google = window.google;

class GoogleMap extends Component {
  constructor() {
    super()
    this.updateMap = this.updateMap.bind(this);
  }

  updateMap() {
    return (
      new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
          lat: this.props.lat, lng: this.props.lon
        }
      })
    )
  }

  // update the map position on new city search
  // on condition that lat and lon are not equal
  // to the last city searched
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateMap();
    }
  }

  //init the map on city search
  componentDidMount() {
    this.updateMap();
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
