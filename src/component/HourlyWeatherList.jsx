import { useState } from "react";
import HourlyWeatherCard from "./HourlyWeatherCard";

const HourlyWeatherList = ({ weather }) => {
  const { hourly, units } = weather;
  const {
    time,
    temperature_2m: temp,
    weather_code: code,
    is_day: isDay,
  } = hourly;
  //console.log(hourly);

  return (
    <>
      {time.map((item, index) => {
        const newItem = {
          timeX: time[index],
          tempX: temp[index],
          codeX: code[index],
          isDayX: isDay[index],
        };
        return <HourlyWeatherCard key={index} weather={newItem} unit={units} />;
      })}
    </>
  );
};

export default HourlyWeatherList;
