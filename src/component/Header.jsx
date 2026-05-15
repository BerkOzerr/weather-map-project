import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateThema } from "../redux/slice/themaSlice";
import { useState } from "react";
import { getCityData } from "../redux/slice/mapSlice";

const Header = () => {
  const { thema } = useSelector((state) => state.thema);
  const dispatch = useDispatch();

  const [cityUp, setCityUp] = useState("");

  const handleChange = (e) => {
    setCityUp(e.target.value);
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      // console.log(city);
      dispatch(getCityData(cityUp));
    }
  };
  // console.log(thema);
  return (
    <div className="flex w-full items-center justify-between px-8 h-36 bg-gray-900 text-white ">
      <div className="flex items-center justify-center p-4  dark:hover:text-indigo-400 hover:text-amber-400 rounded-xl hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400">
        <Link to={"/"}>
          <h1 className="text-5xl font-bold">Weather App</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 font-bold text-2xl">
        <div className="flex items-center  justify-center ">
          {thema === "dark" ? (
            <div
              onClick={() => dispatch(updateThema("light"))}
              className="p-3 rounded-[50%] shadow-md shadow-indigo-400 flex justify-center items-center"
            >
              <Moon
                stroke="var(--color-indigo-400)"
                className="hover:animate-pulse delay-200    duration-100 ease-in-out transition-all"
              />
            </div>
          ) : (
            <div
              onClick={() => dispatch(updateThema("dark"))}
              className="p-3 rounded-[50%] shadow-md cursor-pointer shadow-amber-400 flex justify-center items-center"
            >
              <Sun
                stroke="var(--color-amber-400)"
                className=" hover:animate-spin delay-200 duration-100 ease-in-out transition-all"
              />{" "}
            </div>
          )}
        </div>
        <div className="flex   rounded-4xl flex-col items-center justify-center ">
          <input
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeydown(e)}
            placeholder="Search City Name"
            type="text"
            className="py-6 px-12 placeholder:text-white text-white  text-end text-xl  outline-none shadow-md shadow-amber-400 dark:shadow-indigo-400 rounded-xl"
          />
        </div>
        <div className="hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
          <Link to={"/"}>
            <h1>Home</h1>
          </Link>
        </div>
        <div className="hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
          <Link to={"/map"}>
            <h1>Map</h1>
          </Link>
        </div>
        <div className="hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
          <Link to={"/weather"}>
            <h1>Weather</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
