import * as React from "react";
import WeatherIcon, { WeatherIconString } from "../WeatherIcon";
import "./style.css";

export interface DayForecastProps {
  weather: WeatherIconString;
}

class DayForecast extends React.PureComponent<DayForecastProps> {
  public render() {
    return (
      <div className="DayForecast">
        <WeatherIcon name={this.props.weather} width="100%" height="100%" />
      </div>
    );
  }
}

export default DayForecast;
