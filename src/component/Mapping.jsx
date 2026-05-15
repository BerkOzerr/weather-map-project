import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MyComponent from "./MyComponent";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCityData } from "../redux/slice/mapSlice";

const Mapping = () => {
  const { position, cityDescription } = useSelector((state) => state.map);

  return (
    <div className=" relative ">
      <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution={import.meta.env.VITE_ATT}
          url={import.meta.env.VITE_URL}
        />
        <MyComponent />

        <Marker position={position}>
          <Popup>{cityDescription}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mapping;
