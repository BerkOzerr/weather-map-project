import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { reverseGeoCode, updatePosition } from "../redux/slice/mapSlice";
import { useDispatch } from "react-redux";

const LocationMarker = () => {
  const dispatch = useDispatch();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      console.log(e);
      dispatch(reverseGeoCode(e.latlng));
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return null;
};

export default LocationMarker;
