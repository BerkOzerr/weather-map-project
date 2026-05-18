import { Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateThema } from "../redux/slice/themaSlice";
import { useEffect, useState } from "react";
import { getCityData } from "../redux/slice/mapSlice";

const Header = () => {
  const { thema } = useSelector((state) => state.thema);
  const dispatch = useDispatch();

  const [cityUp, setCityUp] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);

  const handleChange = (e) => {
    // console.log(cityUp);
    setCityUp(e.target.value);
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      // console.log(city);
      dispatch(getCityData(cityUp));
    }
  };
  const handleClick = () => {
    console.log(showNavbar);
    setShowNavbar(!showNavbar);
  };
  // console.log(thema);
  return (
    <div
      className={`flex w-full  items-center  h-36  flex-wrap  truncate  lg:justify-between  max-md:justify-evenly max-sm:justify-between px-8  bg-black/80  text-white `}
    >
      <div className="flex items-center justify-center p-4  dark:hover:text-indigo-400 hover:text-amber-400 rounded-xl hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400">
        <Link to={"/"}>
          <h1 className="header-title ">Weather App</h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 font-bold  text-2xl">
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
              />
            </div>
          )}
          <div className="navbar-icon p-3 rounded-[50%] shadow-md shadow-amber-400 dark:shadow-indigo-400 flex justify-center items-center mx-2">
            <Menu
              className="dark:stroke-indigo-400 stroke-amber-400 cursor-pointer"
              onClick={() => handleClick()}
            />
          </div>
          <div
            className={showNavbar ? "navbar-linker active" : "navbar-linker"}
          >
            <div className="flex rounded-4xl flex-col items-center justify-center input-container-city ">
              <input
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeydown(e)}
                placeholder="Search City Name"
                type="text"
                className="city-search-input placeholder:text-white/60 text-white  text-center     outline-none shadow-md shadow-amber-400 dark:shadow-indigo-400 rounded-xl"
              />
            </div>
            <div className="linker-item">
              <div className="hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
                <Link to={"/"}>
                  <h1>Home</h1>
                </Link>
              </div>
              <div className="hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
                <Link to={"/map"}>
                  <h1>Map</h1>
                </Link>
              </div>
              <div className="hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl">
                <Link to={"/weather"}>
                  <h1>Weather</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
