import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import MyComponent from "./CenterMapComponent";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

import { MapPinHouse } from "lucide-react";
import { useRef, useState } from "react";
import { SetViewOnClick } from "./SetViewOnClick";
import CenterMapComponent from "./CenterMapComponent";
import LocationMarker from "./LocationMarker";

const Mapping = ({ small }) => {
  const { position, cityDescription } = useSelector((state) => state.map);
  const [myLocation, setMyLocation] = useState(false);
  const animateRef = useRef(false);

  const handleMyLocation = () => {
    console.log(myLocation);
    setMyLocation(!myLocation);
  };

  return (
    <div className=" relative m-10 ">
      <MapContainer
        className={small ? " format-size rounded-4xl" : "rounded-4xl"}
        center={position}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution={import.meta.env.VITE_ATT}
          url={import.meta.env.VITE_URL}
        />
        <CenterMapComponent />
        {myLocation ? <LocationMarker /> : <></>}
        <Marker position={position}>
          <Popup>{cityDescription}</Popup>
        </Marker>
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
      <MapPinHouse
        size={34}
        stroke="white"
        onClick={(e) => handleMyLocation(e)}
        className={
          myLocation
            ? "stroke-red-400 p-3 rounded-[50%] absolute top-15 right-15 z-9998 bg-black/60 cursor-pointer hover:stroke-amber-400 dark:hover:stroke-indigo-400"
            : "p-3 rounded-[50%] absolute top-15 right-15 z-9998 bg-black/60 cursor-pointer hover:stroke-amber-400 dark:hover:stroke-indigo-400"
        }
      />
      {myLocation ? (
        <>
          <div className="absolute top-[35%] right-[35%]  w-fit flex z-9999">
            <span className="text-red-400 animate-bounce text-2xl font-bold">
              Click map and wait 5 seconds.
            </span>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Mapping;
