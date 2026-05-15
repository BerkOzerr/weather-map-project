import { weatherCodeMap } from "../lib/weatherCodeMap";

const WeatherImg = ({ code }) => {
  const iconSrc = weatherCodeMap[code] || null; // Fallback icon
  return (
    <img
      className="opacity-100 hover:opacity-70 transition-all duration-150 delay-200 hover:scale-x-120"
      src={iconSrc}
      alt="Weather Icon"
    />
  );
};

export default WeatherImg;
