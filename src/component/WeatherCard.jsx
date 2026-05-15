import WeatherImg from "./WeatherImg";

const WeatherCard = ({ weather }) => {
  console.log(weather[0]?.current.weather_code);
  return (
    <div>
      <WeatherImg code={1} />
    </div>
  );
};

export default WeatherCard;
