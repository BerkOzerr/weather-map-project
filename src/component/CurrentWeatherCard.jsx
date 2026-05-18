import WeatherImg from "./WeatherImg";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CurrentWeatherCard = ({ weather }) => {
  const { city } = useSelector((state) => state.map);
  const {
    temperature_2m: temp,
    relative_humidity_2m: humidity,
    wind_speed_10m: wind,
    time,
  } = weather[0].current;
  const {
    temperature_2m: temp_unit,
    relative_humidity_2m: humidity_unit,
    wind_speed_10m: wind_unit,
  } = weather[0].units;

  function formatTime(s) {
    let start = s.slice(0, 4);
    let or = s.slice(5, 7);
    let end = s.slice(8, s.length);

    return end + "/" + or + "/" + start;
  }

  const date = formatTime(time.substring(0, 10));

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-120 text-white   bg-black/10 dark:bg-white/10 p-12 my-10 rounded-3xl ">
      <Link
        to={"/map"}
        className="hover:text-amber-400 dark:hover:text-indigo-600  "
      >
        <div className="my-5  flex flex-wrap gap-2 items-center justify-center ">
          <h1 className="text-5xl font-bold   italic  pointer-events-none">
            {city?.city}
          </h1>
          <h1 className="text-5xl font-bold   italic  pointer-events-none">
            {city?.province}
          </h1>
          <div className="flex flex-wrap items-center justify-center text-white/60 gap-4">
            <h1 className="text-2xl font-semibold   italic  pointer-events-none">
              {city?.town}
            </h1>
            <h1 className="text-2xl font-semibold   italic  pointer-events-none">
              {city?.suburb}
            </h1>
            <h1 className="text-2xl font-semibold   italic  pointer-events-none">
              {city?.village}
            </h1>
          </div>
        </div>
      </Link>
      <div className=" flex items-center justify-center text-3xl font-extralight italic gap-3 pointer-events-none">
        <h1>{date}</h1>
      </div>
      <WeatherImg code={weather[0]?.current.weather_code} />
      <div className="flex items-center  justify-center gap-2 animate-pulse delay-300">
        <span className="text-5xl tracking-wider  font-bold text-amber-400 dark:text-indigo-400  ">
          {temp}
        </span>
        <span className="text-4xl  text-white/60">{temp_unit}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center  justify-center gap-2">
          <img
            className="w-8 h-8 opacity-100 hover:opacity-70 transition-all duration-150 delay-100 hover:animate-pulse "
            src={humidity_icon}
            alt=""
          />
          <span className="text-3xl font-bold">{humidity}</span>
          <span className="text-2xl text-white/60">{humidity_unit}</span>
        </div>
        <div className="flex items-center  justify-center gap-2">
          <img
            className="opacity-100  hover:opacity-70 transition-all duration-150 delay-100  hover:animate-pulse w-8 h-8"
            src={wind_icon}
            alt=""
          />
          <span className="text-3xl font-bold">{wind}</span>
          <span className="text-2xl text-white/60">{wind_unit}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
