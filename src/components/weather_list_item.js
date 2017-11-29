import React from 'react';

const WeatherListItem = (props) => {
  // if (props.searchError !== '') {
  //   console.log(props.searchError);
  // }

  const kelvinToCelcius = num => Math.round(num - 273.15);
  const temp = kelvinToCelcius(props.weather.main.temp);
  const desc = props.weather.weather[0].description;

  const weatherIconSelector = () => {
    let icon = '';
    const timeNow = Date.now();
    // get unix timeStamp from current date since
    // our sunset and sunrise data is unix UTC
    // and we need to compare them
    const timeStamp = Math.floor(timeNow / 1000);
    const sunRise = props.weather.sys.sunrise;
    const sunSet = props.weather.sys.sunset;
    let dayOrNight = '';

    // determine if its day or night for icon display
    dayOrNight = timeStamp > sunRise && timeStamp < sunSet ? 'day' : 'night';

    if (props.weather.weather[0].id >= 200 && props.weather.weather[0].id <= 299) {
      icon = `wi-${dayOrNight}-thunderstorm`;
    } else if (props.weather.weather[0].id >= 300 && props.weather.weather[0].id <= 399) {
      icon = `wi-${dayOrNight}-sprinkle`;
    } else if (props.weather.weather[0].id >= 500 && props.weather.weather[0].id <= 599) {
      icon = `wi-${dayOrNight}-rain`;
    } else if (props.weather.weather[0].id >= 600 && props.weather.weather[0].id <= 699) {
      icon = `wi-${dayOrNight}-snow`;
    } else if (props.weather.weather[0].id === 800) {
      // because our icons have different names for a clear sky
      // during the day or night (sunny || clear) we must
      // determine this here as such:
      icon = dayOrNight === 'day' ? icon = `wi-${dayOrNight}-sunny` : icon = `wi-${dayOrNight}-clear`;
    } else if (props.weather.weather[0].id >= 700 && props.weather.weather[0].id <= 799) {
      icon = `wi-${dayOrNight}-fog`;
    } else if (props.weather.weather[0].id >= 801 && props.weather.weather[0].id <= 809) {
      icon = `wi-${dayOrNight}-cloudy`;
    }
    return icon;
  };

  return (
    <div className="weather-info-list">
      <div>{props.weather.name}, {props.weather.sys.country}</div>
      <div>Temperature: {temp}°C</div>
      <div>Humidity: {props.weather.main.humidity}%</div>
      <div className="flex-icon">
        <i className={`wi + ${weatherIconSelector()}`} /><span className="weather-temp">{desc}</span>
      </div>
    </div>
  );
};

export default WeatherListItem;
