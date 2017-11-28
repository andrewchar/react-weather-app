import React from 'react';
import GoogleMap from './google_map'
import WeatherListItem from './weather_list_item'

const WeatherList = (props) => {
  if (props.searchError !== '') {
    return <div className="col-sm-12">{props.searchError}</div>
  }
  if (props.daysWeatherArray.length === 0) {
    return null;
  }

  const temp = props.daysWeatherArray;
  const lat = props.daysWeatherArray.coord.lat;
  const lon = props.daysWeatherArray.coord.lon;

  return (
    <div className="col-sm-12">
      <div className="col-sm-12 text-center">
      <WeatherListItem weather={temp} searchError={props.searchError} />
      </div>
      <div className="google-map--wrapper col-sm-12">
        <GoogleMap lat={lat} lon={lon} />
      </div>
    </div>
  )

}

export default WeatherList;
