import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upWeather } from "../redux/slice/weatherSlice";
import HourlyWeatherCard from "./HourlyWeatherCard";

const HourlyWeather = () => {
  const { position } = useSelector((state) => state.map);
  const { hourlyWeatherList } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      upWeather({
        latitude: position.lat,
        longitude: position.lon,
        select: "hourly",
      }),
    );
  }, [position, dispatch]);
  return (
    <div className="flex items-center justify-center w-full">
      {hourlyWeatherList.length > 0 ? (
        <HourlyWeatherCard weather={hourlyWeatherList} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HourlyWeather;
