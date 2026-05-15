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
      ? localStorage.getItem("city")
      : "istanbul",
    cityDescription: localStorage.getItem("cityDescription")
      ? localStorage.getItem("cityDescription")
      : "",
    status: "loading",
    error: "",
  },
  reducers: {
    updatePosition: (state, action) => {
      //console.log(action.payload);
      state.position = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCityData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCityData.fulfilled, (state, action) => {
        console.log(action?.payload?.data?.results[0]);
        state.city = action?.payload?.data?.results[0]?.name;
        state.cityDescription = `${action?.payload?.data?.results[0]?.country} Şehir-${action?.payload?.data?.results[0]?.name} Nüfusu-${action?.payload?.data?.results[0]?.population}`;
        state.position = {
          lat: action?.payload?.data?.results[0]?.latitude,
          lon: action?.payload?.data?.results[0]?.longitude,
        };

        localStorage.setItem("position", JSON.stringify(state.position));
        localStorage.setItem("cityDescription", state.cityDescription);
        localStorage.setItem("city", state.city);
        state.status = "ok";
        window.location.reload();
      })
      .addCase(getCityData.rejected, (state, action) => {
        state.status = "error";
        state.error = action?.payload?.error?.message;
      });
  },
});

export const { updatePosition } = mapSlice.actions;
export default mapSlice.reducer;
