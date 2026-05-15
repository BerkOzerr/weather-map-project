import { configureStore } from "@reduxjs/toolkit";
import themaSlice from "./slice/themaSlice";
import mapSlice from "./slice/mapSlice";
import weatherSlice from "./slice/weatherSlice";
export const store = configureStore({
  reducer: {
    thema: themaSlice,
    map: mapSlice,
    weather: weatherSlice,
  },
});
