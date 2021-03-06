import * as React from "react";

import DayForecast from "./components/DayForecast";
import { WeatherIconString } from "./components/WeatherIcon";

import "./App.css";
import logo from "./logo.svg";

export interface AppState {
  weather: WeatherIconString;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      weather: "day"
    };
  }

  public render() {
    const { weather } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Here goes the weather stuff!</p>
        <div className="App-content">
          <DayForecast weather={weather} />
          <select onChange={this.updateIcon} value={weather}>
            <option value="cloudy">Cloudy</option>
            <option value="cloudy-day">Cloudy Day</option>
            <option value="cloudy-night">Cloudy Night</option>
            <option value="day">Day</option>
            <option value="night">Night</option>
            <option value="rainy">Rainy</option>
            <option value="snowy">Snowy</option>
          </select>
        </div>
      </div>
    );
  }

  private updateIcon = (evt: any) => {
    const newVal = evt.target.value;
    this.setState({ weather: newVal });
  };
}

export default App;
