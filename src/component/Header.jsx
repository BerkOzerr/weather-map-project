import { Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { updateThema } from "../redux/slice/themaSlice";
import { useState } from "react";
import { getCityData } from "../redux/slice/mapSlice";

const Header = () => {
  const { thema } = useSelector((state) => state.thema);
  const dispatch = useDispatch();
  const location = useLocation();

  // React to the path name
  // console.log(location.pathname);

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
    <nav
      className={`flex w-full  items-center  h-36  flex-wrap  truncate justify-between px-8  bg-black/80  text-white `}
    >
      <div className="flex items-center justify-center p-4  dark:hover:text-indigo-400 hover:text-amber-400 rounded-xl hover:shadow-md hover:shadow-amber-400 dark:hover:shadow-indigo-400">
        <NavLink to={"/"}>
          <h1 className="header-title ">Weather App</h1>
        </NavLink>
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
            className={showNavbar ? "navbar-linker actives" : "navbar-linker"}
          >
            <div className="flex rounded-4xl flex-col items-center justify-center input-container-city ">
              <input
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeydown(e)}
                placeholder="Search City Name"
                type="text"
                className="city-search-input placeholder:text-white/60 text-white  text-center     outline-none shadow-xs shadow-amber-400 dark:shadow-indigo-400 rounded-xl"
              />
            </div>
            <div className="linker-item">
              <div
                className={
                  location.pathname === "/"
                    ? "dark:bg-indigo-400 bg-amber-400  hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2  rounded-xl"
                    : " hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 py-2  rounded-xl"
                }
              >
                <NavLink to={"/"}>
                  <h1>Home</h1>
                </NavLink>
              </div>
              <div
                className={
                  location.pathname === "/map"
                    ? " dark:bg-indigo-400 bg-amber-400 hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2 rounded-xl"
                    : " hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2   rounded-xl"
                }
              >
                <NavLink to={"/map"}>
                  <h1>Map</h1>
                </NavLink>
              </div>
              <div
                className={
                  location.pathname === "/weather"
                    ? " dark:bg-indigo-400 bg-amber-400 hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2  rounded-xl"
                    : " hover:shadow-md  hover:shadow-amber-400 dark:hover:shadow-indigo-400 p-2  rounded-xl"
                }
              >
                <NavLink to={"/weather"}>
                  <h1>Weather</h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
