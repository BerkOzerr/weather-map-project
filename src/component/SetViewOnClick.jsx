import { useMapEvent } from "react-leaflet";
import { reverseGeoCode } from "../redux/slice/mapSlice";
import { useDispatch } from "react-redux";

export function SetViewOnClick({ animateRef }) {
  const dispatch = useDispatch();
  const map = useMapEvent("click", (e) => {
    console.log(e.latlng);
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
    dispatch(reverseGeoCode(e.latlng));
  });

  return null;
}
