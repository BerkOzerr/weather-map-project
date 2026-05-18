import Header from "./Header";
import WeatherList from "./WeatherList";

const WeatherPage = () => {
  return (
    <div className="dark:bg-black/80 dark:text-gray-300 text-gray-600 flex flex-col  relative h-fit w-full">
      <Header />
      <WeatherList />
    </div>
  );
};

export default WeatherPage;
