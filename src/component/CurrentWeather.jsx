import { useDispatch, useSelector } from "react-redux";
import { getWeather, upWeather } from "../redux/slice/weatherSlice";
import { useEffect } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";

const CurrentWeather = () => {
  const { currentWeather, hourlyWeather, currentWeatherList } = useSelector(
    (state) => state.weather,
  );

  const { position } = useSelector((state) => state.map);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      upWeather({
        latitude: position.lat,
        longitude: position.lon,
        select: "current",
      }),
    );
  }, [position, dispatch]);
  // console.log(currentWeatherList.length);

  useEffect(() => {
    if (currentWeather.select === "current") {
      //console.log(currentWeather);
      dispatch(getWeather(currentWeather));
    }
    if (hourlyWeather.select === "hourly") {
      dispatch(getWeather(hourlyWeather));
    }
  }, [currentWeather, dispatch, hourlyWeather]);
  return (
    <div className={`flex items-center justify-center w-full `}>
      {currentWeatherList.length > 0 ? (
        <CurrentWeatherCard weather={currentWeatherList} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CurrentWeather;
