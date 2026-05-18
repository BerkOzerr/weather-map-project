import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import { useSelector } from "react-redux";
import { wCode } from "../lib/wCode";
import { Loader2 } from "lucide-react";

const WeatherList = () => {
  const { currentWeatherList } = useSelector((state) => state.weather);
  const { status } = useSelector((state) => state.map);
  const [bgImage, setBgImage] = useState("");
  const root = document.documentElement;
  useEffect(() => {
    //console.log(currentWeatherList[0]?.current?.weather_code);
    if (currentWeatherList[0]?.current?.weather_code != null) {
      //console.log(wCode(currentWeatherList[0]?.current?.weather_code));
      setBgImage(wCode(currentWeatherList[0]?.current?.weather_code));
    }
  }, [currentWeatherList]);

  useEffect(() => {
    // console.log(root);
    // console.log(bgImage);
    console.log(status);
    root.style.setProperty("--url-bg-images", `url("/${bgImage}")`);
  }, [bgImage]);
  return (
    <div
      className={
        bgImage.length >= 3
          ? `container-images active`
          : "container-images dark:bg-black/80 h-screen "
      }
    >
      {status === "loading" ? (
        <>
          <Loader2
            size={56}
            className="dark:stroke-indigo-400 stroke-amber-400 absolute top-[50%] left-[45%] animate-spin"
          />
        </>
      ) : (
        <>
          <CurrentWeather />
          <HourlyWeather />
        </>
      )}
    </div>
  );
};

export default WeatherList;
