import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import './style/App.css';
import './style/vendor/weather-icons.css';
import WeatherList from './components/weather_list';
import SearchBar from './components/search_bar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      weather: [],
      term: '',
      cityNotFound: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const API_KEY = '16e3cd6a7895f8a3af982d195712ff48';
    const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
    const city = this.state.term;
    const url = `${ROOT_URL}&q=${city}`;
    axios.get(url)
      .then((response) => {
        this.setState({
          weather: response.data,
          cityNotFound: ''
        })
      }).catch((error) => {
        this.setState({
          weather: [],
          cityNotFound: `We cannot find ${this.state.term}, check your spelling.`
        })
    });
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          submitForm={this.handleSubmit}
          onInputChange={this.onInputChange}
          term={this.state.term}/>
        <div>
          <WeatherList daysWeatherArray={this.state.weather} searchError={this.state.cityNotFound} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
