import * as React from "react";
import "./style.css";

import Cloudy from "./Cloudy";
import CloudyDay from "./CloudyDay";
import CloudyNight from "./CloudyNight";
import Day from "./Day";
import Night from "./Night";
import Rainy from "./Rainy";
import Snowy from "./Snowy";
import Thunder from "./Thunder";

export type WeatherIconString =
  | "cloudy"
  | "cloudy-day"
  | "cloudy-night"
  | "day"
  | "night"
  | "rainy"
  | "snowy"
  | "thunder";

export interface WeatherIconProps {
  name?: WeatherIconString;
  width?: number;
  height?: number;
}

// Probably the wrong way to do this
// function getIcon(name: string) {
//   return require(`./assets/${name}.svg`);
// }

class WeatherIcon extends React.PureComponent<WeatherIconProps> {
  protected static defaultProps = {
    height: 200,
    name: "day",
    width: 200
  };

  private components = {
    cloudy: Cloudy,
    "cloudy-day": CloudyDay,
    "cloudy-night": CloudyNight,
    day: Day,
    night: Night,
    rainy: Rainy,
    snowy: Snowy,
    thunder: Thunder
  };

  public render() {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 64 64"
      >
        {this.getIcon()}
      </svg>
    );
  }

  private getIcon() {
    const name = this.props.name || "day";
    const ComponentName = this.components[name];
    return <ComponentName />;
  }
}

export default WeatherIcon;
