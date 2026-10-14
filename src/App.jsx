import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateThema } from "./redux/slice/themaSlice";
import MapPage from "./component/MapPage";
import WeatherPage from "./component/WeatherPage";

function App() {
  const { thema } = useSelector((state) => state.thema);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(thema);
    if (thema) {
      dispatch(updateThema(thema));
      document.documentElement.classList.toggle("dark", thema === "dark");
    }
  }, [thema, dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </>
  );
}

export default App;
