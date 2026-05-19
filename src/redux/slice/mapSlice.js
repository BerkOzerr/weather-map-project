import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../lib/axios";

export const getCityData = createAsyncThunk("getCityData", async (cityName) => {
  console.log(cityName);
  try {
    const response = await client.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=2&language=en&format=json`,
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});
//

export const reverseGeoCode = createAsyncThunk(
  "reverseGeoCode",
  async (cityGeoCode) => {
    const { lng, lat } = cityGeoCode;
    //console.log(lat, lng);
    try {
      const response = await client.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1&layer=address`,
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const mapSlice = createSlice({
  name: "map",
  initialState: {
    position: localStorage.getItem("position")
      ? JSON.parse(localStorage.getItem("position"))
      : {
          lat: 41.01384,
          lon: 28.94966,
        },
    city: localStorage.getItem("city")
      ? JSON.parse(localStorage.getItem("city"))
      : {
          city: "İstanbul",
        },
    cityDescription: localStorage.getItem("cityDescription")
      ? localStorage.getItem("cityDescription")
      : "",
    status: localStorage.getItem("status")
      ? localStorage.getItem("status")
      : "loading",
    error: "",
  },
  reducers: {
    updatePosition: (state, action) => {
      // console.log(action.payload);
      state.position = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityData.pending, (state, action) => {
        state.status = "loading";
        localStorage.setItem("status", state.status);
      })
      .addCase(getCityData.fulfilled, (state, action) => {
        //console.log(action?.payload?.data?.results[0]);
        state.city = { city: action?.payload?.data?.results[0]?.name };
        state.cityDescription = `${action?.payload?.data?.results[0]?.country} Şehir-${action?.payload?.data?.results[0]?.name} Nüfusu-${action?.payload?.data?.results[0]?.population}`;
        state.position = {
          lat: action?.payload?.data?.results[0]?.latitude,
          lon: action?.payload?.data?.results[0]?.longitude,
        };

        state.status = "ok";
        localStorage.setItem("status", state.status);
        localStorage.setItem("position", JSON.stringify(state.position));
        localStorage.setItem("cityDescription", state.cityDescription);
        localStorage.setItem("city", JSON.stringify(state.city));
        window.location.reload();
      })
      .addCase(getCityData.rejected, (state, action) => {
        state.status = "error";
        localStorage.setItem("status", state.status);
        state.error = action?.payload?.error?.message;
      });
    builder
      .addCase(reverseGeoCode.pending, (state, action) => {
        state.status = "loading";
        localStorage.setItem("status", state.status);
      })
      .addCase(reverseGeoCode.fulfilled, (state, action) => {
        //console.log(action);
        state.city = null;
        state.cityDescription = action?.payload?.data?.display_name;
        state.position = {
          lat: action?.payload?.data?.lat,
          lon: action?.payload?.data?.lon,
        };

        if (action?.payload?.data?.address.city != null) {
          //console.log("city : " + action?.payload?.data?.address.city);
          state.city = {
            ...state.city,
            city: action?.payload?.data?.address.city,
          };
        }
        if (
          action?.payload?.data?.address.province != null &&
          state.city?.city === undefined
        ) {
          //console.log("province : " + action?.payload?.data?.address.province);
          state.city = {
            ...state.city,
            province: action?.payload?.data?.address.province,
          };
        }
        if (action?.payload?.data?.address.town != null) {
          //console.log("town : " + action?.payload?.data?.address.town);
          state.city = {
            ...state.city,
            town: action?.payload?.data?.address.town,
          };
        }
        if (action?.payload?.data?.address.suburb != null) {
          //console.log(action?.payload?.data?.address.suburb);
          state.city = {
            ...state.city,
            suburb: action?.payload?.data?.address.suburb,
          };
        }
        if (
          action?.payload?.data?.address.village != null &&
          state.city?.suburb === undefined
        ) {
          state.city = {
            ...state.city,
            village: action?.payload?.data?.address.village,
          };
          //console.log("village : " + action?.payload?.data?.address.village);
        }
        //console.log(state.city);
        state.status = "ok";
        localStorage.setItem("position", JSON.stringify(state.position));
        localStorage.setItem("cityDescription", state.cityDescription);
        localStorage.setItem("city", JSON.stringify(state.city));
        localStorage.setItem("status", state.status);
      })
      .addCase(reverseGeoCode.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.payload?.error?.message;
        localStorage.setItem("status", state.status);
      });
  },
});

export const { updatePosition } = mapSlice.actions;
export default mapSlice.reducer;
