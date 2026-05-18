import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upWeather } from "../redux/slice/weatherSlice";
import HourlyWeatherCard from "./HourlyWeatherCard";
import HourlyWeatherList from "./HourlyWeatherList";

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
  // console.log(hourlyWeatherList[0]);
  return (
    <div className="hourly-container flex overflow-x-auto  flex-col items-center justify-start gap-2   px-8 relative flex-wrap h-42 w-full">
      {hourlyWeatherList.length > 0 ? (
        <HourlyWeatherList weather={hourlyWeatherList[0]} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default HourlyWeather;
