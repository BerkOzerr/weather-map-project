import { weatherCodeMap } from "../lib/weatherCodeMap";

const WeatherImg = ({ code }) => {
  const iconSrc = weatherCodeMap[code] || null; // Fallback icon
  return (
    <img
      className="opacity-100 hover:brightness-120 transition-all duration-150 delay-200 hover:-translate-y-2"
      src={iconSrc}
      alt="Weather Icon"
    />
  );
};

export default WeatherImg;
