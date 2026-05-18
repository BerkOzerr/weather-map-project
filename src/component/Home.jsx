import { MapContainer } from "react-leaflet";
import Header from "./Header";
import Mapping from "./Mapping";
import CurrentWeather from "./CurrentWeather";

const Home = () => {
  return (
    <div className="dark:bg-black/80 text-gray-700 flex-col  dark:text-white h-fit  w-full flex relative ">
      <Header />
      <div className="flex items-center justify-center h-fit flex-col  flex-wrap  gap-6 p-8">
        <h1 className="text-6xl font-bold">Project Weather-Mapping</h1>
        <div className="font-bold text-3xl flex items-center justify-center flex-col  gap-3">
          <div className="flex items-center justify-center  max-md:flex-col gap-5">
            <span className="w-60 text-wrap">
              This Project Map -{"  "}
              <a
                className=" text-black dark:text-indigo-400 opacity-60 hover:opacity-110"
                href="/map"
              >
                Map
              </a>
            </span>
            <Mapping small={true} />
          </div>
          <div className="flex items-center justify-center max-md:flex-col gap-5">
            <span className="w-60 text-wrap">
              This Project Weather -{"  "}
              <a
                className=" text-black dark:text-indigo-400 opacity-60 hover:opacity-110"
                href="/weather"
              >
                Weather
              </a>
            </span>
            <CurrentWeather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
