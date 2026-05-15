import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const { city } = useSelector((state) => state.map);
  const mapCenter = useMap();
  useEffect(() => {
    mapCenter.getCenter();
  }, [city]);

  // console.log("map center:", mapCenter.getCenter());

  return null;
};

export default MyComponent;
