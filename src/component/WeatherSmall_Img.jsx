import { weatherSmallCodeMap } from "../lib/weatherSmallCodeMap";

const WeatherSmall_Img = ({ code }) => {
  const iconSrc = weatherSmallCodeMap[code] || null; // Fallback icon
  return (
    <img
      className="opacity-100 hover:brightness-120 w-10 h-10 transition-all duration-150 delay-200 hover:-translate-y-2"
      src={iconSrc}
      alt="Weather Icon"
    />
  );
};

export default WeatherSmall_Img;
