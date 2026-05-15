import Header from "./Header";
import WeatherList from "./WeatherList";

const WeatherPage = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-300 text-gray-600 flex flex-col  relative h-svh">
      <Header />
      <WeatherList />
    </div>
  );
};

export default WeatherPage;
