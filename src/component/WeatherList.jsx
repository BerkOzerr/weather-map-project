import { useSelector } from "react-redux";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";

const WeatherList = () => {
  return (
    <div className="flex flex-col">
      <CurrentWeather />
      <HourlyWeather />
    </div>
  );
};

export default WeatherList;
