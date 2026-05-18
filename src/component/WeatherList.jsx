import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import { useSelector } from "react-redux";
import { wCode } from "../lib/wCode";

const WeatherList = () => {
  const { currentWeatherList } = useSelector((state) => state.weather);

  const [bgImage, setBgImage] = useState("rain.gif");

  useEffect(() => {
    //console.log(currentWeatherList[0]?.current?.weather_code);

    if (currentWeatherList[0]?.current?.weather_code != null) {
      //console.log(wCode(currentWeatherList[0]?.current?.weather_code));
      setBgImage(wCode(currentWeatherList[0]?.current?.weather_code));
    }
  }, [currentWeatherList]);

  useEffect(() => {
    console.log(bgImage);
  }, [bgImage, setBgImage]);
  return (
    <div
      className={`flex flex-col  bg-[url(/${bgImage})]  bg-no-repeat bg-cover`}
    >
      <CurrentWeather />
      <HourlyWeather />
    </div>
  );
};

export default WeatherList;
