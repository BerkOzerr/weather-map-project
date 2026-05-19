import WeatherSmall_Img from "./WeatherSmall_Img";

const HourlyWeatherCard = ({ weather }) => {
  const { timeX: time, codeX: code, isDayX: isDay, tempX: temp } = weather;
  //  °C
  return (
    <div className="relative  p-2 dark:bg-white/60  bg-black/60 dark:text-black text-white rounded-xl h-fit">
      <div className="flex items-center justify-center gap-2 flex-col">
        <span className="truncate">{time.substring(0, 10)}</span>
        <span>{time.substring(11, time.length)}</span>
        <WeatherSmall_Img code={code} />
        <span className="text-xl tracking-tighter  font-bold text-amber-400 dark:text-indigo-400  ">
          {temp} <span className="text-md ">°C</span>
        </span>
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
